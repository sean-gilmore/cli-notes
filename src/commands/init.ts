import { Command } from '@oclif/command';

export default class Init extends Command {
  async run(): Promise<void> {
    // 1. Create a config file at ~
    // 2. Store the dir that this command was run in, within that config file
  }
}
