import * as fs from 'fs';

type Arguments = {
  fileName: string;
  extension: string;
  content?: string;
}

/**
 * Represents a Note in the system
 */
export default class Note {
  fileName: string;
  extension: string;
  content?: string;

  constructor(args: Arguments) {
    this.fileName = args.fileName;
    this.extension = args.extension;
    this.content = args.content;
  }

  write(): void {
    fs.writeFileSync(this.filePath(), this.content);
  }

  fullName(): string {
    return `${this.fileName}.${this.extension}`;
  }

  private filePath(): string {
    return `./${this.fullName()}`;
  }

}
