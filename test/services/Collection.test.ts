import { expect, test } from "@oclif/test";
import Collection from '../../src/services/Collection';

describe("Collection", () => {
  before(() => {
    process.env.HOME = './test-dir';
  });

  test.it("returns the test directory structure", () => {
    const collectionTree = Collection.getTree();
    const testTree = {
      name: './test-dir',
      projects: [
        { name: './test-dir/config', projects: [] },
        { name: './test-dir/project1', projects: [] },
        { name: './test-dir/project2', projects: [] },
        { name: './test-dir/project3', projects: [] }
      ]
    }

    expect(collectionTree.name).to.eq(testTree.name);
    expect(collectionTree.projects[0].name).to.eq(testTree.projects[0].name);
  });
});
