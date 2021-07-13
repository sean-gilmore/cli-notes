import * as fs from 'fs';

interface Tree {
  projects: Array<TreeLeaf>;
}

interface TreeLeaf {
  name: string;
  projects?: Array<TreeLeaf>;
}

/** */
export default class Collection {
  public static getTree(): Tree {

    return {
      projects: []
    }
  }

  private static getDirContents(): {

  }
}
