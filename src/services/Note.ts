import * as fs from 'fs';

type Arguments = {
  fileName: string;
  extension: string;
}
/**
 * Represents a Note in the system
 */
export default class Note {
  fileName: string;
  extension: string;

  constructor(args: Arguments) {
    this.fileName = args.fileName;
    this.extension = args.extension;
  }

  write() {
    fs.createWriteStream(`./${this.fileName}.${this.extension}`);
  }
}
