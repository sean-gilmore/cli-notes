import { expect, test } from "@oclif/test";
import Note from '../../src/services/Note';
import * as fs from 'fs';

describe("Note", () => {
  test.it('creates the test file', () => {
    after(() => {
      fs.unlinkSync('./test-file.txt');
    });

    const note = new Note({fileName: 'test-file', extension: 'txt', content: 'Test'});
    note.write();
    expect(fs.existsSync('./test-file.txt')).to.eq(true);
  });
});
