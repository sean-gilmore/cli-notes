import * as fs from 'fs';
import Config from './Config';

interface Tree {
  name: string
  projects: Array<Tree>;
}

/**
 * A Collection is a group of projects, collected under the root directory specified in a config file
*/
export default class Collection {
  public static getTree(): Tree {
    const config = new Config;
    const settings = config.getSettings();
    const result = Collection.recursiveTree(settings.collectionLocation);

    return result;
  }

  public static recursiveTree(path: string): Tree {
    const projects = [] as Array<Tree>;

    fs.readdirSync(path).forEach((subPath: string) => {
      const fullPath = path + '/' + subPath;

      if (fs.lstatSync(fullPath).isDirectory()) {
        projects.push(Collection.recursiveTree(fullPath));
      }
    });

    return {
      name: path,
      projects: projects
    }
  }
}
