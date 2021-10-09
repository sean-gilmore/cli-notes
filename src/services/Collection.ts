import * as fs from 'fs';
import Config from './Config';
import Project from './Project';

/**
 * A Collection is a group of projects, collected under the root directory specified in a config file
*/
export default class Collection {
  public static getTree(): Project {
    const config = new Config;
    const settings = config.getSettings();
    const result = Collection.recursiveTree(settings.collectionLocation);

    return result;
  }

  public static recursiveTree(path: string): Project {
    const projects = [] as Array<Project>;

    fs.readdirSync(path).forEach((subPath: string) => {
      const fullPath = path + '/' + subPath;

      if (fs.lstatSync(fullPath).isDirectory()) {
        projects.push(Collection.recursiveTree(fullPath));
      }
    });

    return new Project({path: path, projects: projects})
  }
}
