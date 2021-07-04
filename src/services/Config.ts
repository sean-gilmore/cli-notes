import * as fs from 'fs';

interface Settings {
  collectionLocation: string;
}

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
    const configBuffer = fs.readFileSync(Config.configPath());
    this.settings = JSON.parse(configBuffer.toString());
    return this.settings;
  }

  static writeSettings(): Settings {
    const location = `${process.env.HOME}`;
    const settings = {
      collectionLocation: location
    };

    fs.writeFileSync(Config.configPath(), JSON.stringify(settings));

    return settings;
  }
}
