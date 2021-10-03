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

/**
 * A Collection is a group of projects, collected under the root directory specified in a config file
*/
export default class Collection {
  public static getTree(): Tree {

    const config = new Config;
    console.log(Config.configPath())
    const settings = config.getSettings();
    console.log(settings.collectionLocation)

    const result = Collection.getDirContents(settings.collectionLocation);


    console.log(result);

    // const tree = Collection.topOfTree();

    // const projects = [];

    // topOfTree.forEach((path: string) => {
    //   if (fs.lstatSync(path).isDirectory()) {
    //     const project = new Project({path})
    //     projects.push(project.getTree());
    //   }
    // });

    return result;
  }

  public static getDirContents(path: string): any {

    const projects: any = fs.readdirSync(path).map((subPath: string) => {
      const fullPath = path + '/' + subPath;
      if (fs.lstatSync(fullPath).isDirectory()) {
        return Collection.getDirContents(fullPath);
      } else {

      }

    });

    return {
      name: path,
      projects: projects
    }
  }

  // public static topOfTree(): Array<string> {
  //   const config = new Config;
  //   console.log(Config.configPath())
  //   const settings = config.getSettings();
  //   console.log(settings.collectionLocation)
  //   const top = fs.readdirSync(settings.collectionLocation);

  //   return top;
  // }

  //   private static getDirContents(): {

  //   }
}
