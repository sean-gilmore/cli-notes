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
    fs.writeFile(`./${this.fullName()}`, this.content, (error): void => {
      if (error) {
        // TODO: What happens when the user doesn't have write permissions to the current directory? Should probably handle this as it's own error case
        /* eslint-disable no-console */
        console.error(error);
      }
    });
  }

  fullName(): string {
    return `${this.fileName}.${this.extension}`;
  }
}
