import * as fs from 'fs';
import Settings from '../types/Settings';
import Config from './Config';

/**
 * The Setup class handles the initialisation of the config file
 */
export default class Setup {
  static writeSettings(): Settings | boolean {
    const location = `${process.env.HOME}`;
    const settings = {
      collectionLocation: location
    };
    const fileExists = fs.existsSync(Config.configPath());

    if (fileExists) {
      return false;
    }

    fs.writeFileSync(Config.configPath(), JSON.stringify(settings));

    return settings;
  }
}
