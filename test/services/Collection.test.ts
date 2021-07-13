import { expect, test } from "@oclif/test";
import Collection from '../../src/services/Collection';

describe("Collection", () => {
  before(() => {
    process.env.HOME = './test';
  });

  test.it("returns the test directory structure", () => {
    const collectionTree = Collection.getTree();
    const testTree = {
      projects: [
        {name: "commands"},
        {name: "services"},
        {name: "config"},
      ]
    }

    expect(collectionTree).to.eq(testTree);
  });
});
