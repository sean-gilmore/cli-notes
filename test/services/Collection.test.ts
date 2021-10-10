import { expect, test } from "@oclif/test";
import Collection from '../../src/services/Collection';

describe("Collection", () => {
  before(() => {
    process.env.HOME = './test-dir';
  });

  test.it("returns the test directory structure", () => {
    const collectionTree = Collection.getTree();
    const testTree = {
      path: './test-dir',
      projects: [
        { path: './test-dir/config', projects: [] },
        { path: './test-dir/project1', projects: [] },
        { path: './test-dir/project2', projects: [] },
        { path: './test-dir/project3', projects: [] }
      ]
    }

    expect(collectionTree.path).to.eq(testTree.path);
    expect(collectionTree.projects[0].path).to.eq(testTree.projects[0].path);
  });
});
