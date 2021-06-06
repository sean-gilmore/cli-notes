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

  write() {
    fs.writeFile(`./${this.fullName()}`, this.content, () => {

    });
  }

  fullName() {
    return `${this.fileName}.${this.extension}`;
  }
}
