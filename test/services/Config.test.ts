import { expect, test } from "@oclif/test";
import Config from '../../src/services/Config';
import * as fs from 'fs';

describe("Config", () => {
  test.it('creates the config file', () => {
    after(() => {
      fs.unlinkSync('./test/config/.note-config.json');
    });

    process.env.HOME = './test/config';
    Config.writeSettings();

    expect(fs.existsSync('./test/config/.note-config.json')).to.eq(true);
  });
});
