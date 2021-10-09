import { expect, test } from "@oclif/test";
import * as fs from 'fs';

describe("init", () => {
  before(() => {
    process.env.HOME = './test-dir/config';
  });

  test
    .stdout()
    .command(["init"])
    .it("creates a config file", (ctx) => {
      expect(ctx.stdout).to.contain("Your config file has been added at: ./test-dir/config");
    });

  test
    .stdout()
    .command(['init']).it("complains that the config file already exists", (ctx) => {
      expect(ctx.stdout).to.contain("You already have a config file at that location!");
    });

  after(() => {
    fs.unlinkSync('./test-dir/config/.note-config.json');
  });
});
