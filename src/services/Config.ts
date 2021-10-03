import * as fs from 'fs';
import Settings from '../types/Settings';

/**
 * A Config is a file that contains details about where a project lives
 */
export default class Config {
  static configFileName = '.note-config.json';
  static defaultSettings: Settings = {
    collectionLocation: '.'
  }

  settings: Settings | null = null;

  static configPath(): string {
    const homeDir = process.env.HOME;
    return `${homeDir}/${Config.configFileName}`;
  }

  // Load saved settings, or return default settings
  getSettings(): Settings {
    const loadedSettings = this.loadSettings();
    if (loadedSettings) {
      return loadedSettings;
    } else {
      return Config.defaultSettings;
    }
  }

  // Load settings from saved JSON file
  private loadSettings(): Settings | null {
    try {
      const configBuffer = fs.readFileSync(Config.configPath());
      console.log(Config.configPath());

      this.settings = JSON.parse(configBuffer.toString());
    } catch(e) {
      console.error(e);
    }

    return this.settings;
  }

}
