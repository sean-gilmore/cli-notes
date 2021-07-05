import * as fs from 'fs';
import Settings from '../types/Settings';

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

      this.settings = JSON.parse(configBuffer.toString());
    } catch(e) {
      console.error(e);
    }

    return this.settings;
  }

  static writeSettings(): Settings|boolean {
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
