import { expect, test } from "@oclif/test";
import Setup from '../../src/services/Setup';
import * as fs from 'fs';

describe("Config", () => {
  test.it('creates the config file', () => {
    after(() => {
      fs.unlinkSync('./test-dir/config/.note-config.json');
    });

    process.env.HOME = './test-dir/config';
    Setup.writeSettings();

    expect(fs.existsSync('./test-dir/config/.note-config.json')).to.eq(true);
  });
});
