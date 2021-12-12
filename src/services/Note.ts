import * as fs from 'fs';
import Config from './Config';

type Arguments = {
  fileName: string;
  extension: string;
  content?: string;
  filePath: string;
}

/**
 * Represents a Note in the system
 */
export default class Note {
  fileName: string;
  extension: string;
  content?: string;
  filePath: string;

  constructor(args: Arguments) {
    this.fileName = args.fileName;
    this.filePath = args.filePath;
    this.extension = args.extension;
    this.content = args.content;
  }

  write(): void {
    fs.writeFileSync(this.fullPath(), this.content);
  }

  fullName(): string {
    return `${this.fileName}.${this.extension}`;
  }

  private fullPath(): string {
    // const config = new Config;
    // const settings = config.getSettings();

    return `${this.filePath}/${this.fullName()}`;
  }
}
