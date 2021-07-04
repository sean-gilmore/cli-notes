import { Command } from '@oclif/command';
import Config from '../services/Config';

export default class Init extends Command {
  async run(): Promise<void> {
    const settings = Config.writeSettings();

    this.log(`New project created in: ${settings.collectionLocation}`);
  }
}
