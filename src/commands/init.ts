import { Command } from '@oclif/command';
import Config from '../services/Config';
import Settings from '../types/Settings';

export default class Init extends Command {
  async run(): Promise<void> {
    const settings = Config.writeSettings() as Settings;

    if (settings && settings.collectionLocation) {
      this.log(`Your config file has been added at: ${settings.collectionLocation}`);
    } else {
      this.log('You already have a config file at that location!');
    }
  }
}
