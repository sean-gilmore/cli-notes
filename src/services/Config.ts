import * as fs from 'fs';

interface Settings {
  collectionLocation: string
}
export default class Config {
  static noteConfig = '~/.note-config.json';

  settings: Settings = {
    collectionLocation: '~/Notes',
  }

  getSettings(): Settings|boolean {
    const loadedSettings = this.loadSettings();
    if (loadedSettings) {
      return loadedSettings;
    } else {
      return false;
    }
  }

  loadSettings(): Settings {
    const configBuffer = fs.readFileSync(Config.noteConfig);
    console.log(configBuffer);
    return this.settings;
  }

  writeSettings(): Settings {
    fs.writeFileSync(Config.noteConfig, JSON.stringify(this.settings));
    return this.settings;
  }
}
