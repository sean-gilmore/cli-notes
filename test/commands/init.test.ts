import { expect, test } from "@oclif/test";
import * as fs from 'fs';

describe("init", () => {
  before(() => {
    process.env.HOME = './test/config';
  });

  test
    .stdout()
    .command(["init"])
    .it("creates a config file", (ctx) => {
      expect(ctx.stdout).to.contain("New project created in: .");
    });

  after(() => {
    fs.unlinkSync('./test/config/.note-config.json');
  });
});
