import { expect, test } from "@oclif/test";
import Config from '../../src/services/Config';
import * as fs from 'fs';

describe("Config", () => {
  test.it('creates the config file', () => {
    after(() => {
      fs.unlinkSync('./.note-config.json');
    });

    process.env.HOME = '.';
    Config.writeSettings();

    expect(fs.existsSync('./.note-config.json')).to.eq(true);
  });
});
