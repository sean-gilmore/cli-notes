import * as fs from 'fs';
import Config from './Config';
import Project from './Project';

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
    const topOfTree = Collection.topOfTree();

    const projects = [];

    topOfTree.forEach((path: string) => {
      if (fs.lstatSync(path).isDirectory()) {
        const project = new Project({path})
        projects.push(project.getTree());
      }
    });

    return {
      projects: []
    }
  }

  public static topOfTree(): Array<string> {
    const config = new Config;
    console.log(Config.configPath())
    const settings = config.getSettings();
    console.log(settings.collectionLocation)
    const top = fs.readdirSync(settings.collectionLocation);



    console.log(top);
    return top;
  }

//   private static getDirContents(): {

//   }
}
