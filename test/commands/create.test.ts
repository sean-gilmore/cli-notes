import { expect, test } from "@oclif/test";
import * as fs from 'fs';

describe("create", () => {
  before(() => {
    process.env.HOME = './test';
  });

  test
    .stdout()
    .command(["create", "meeting", "test", "-p", "development"])
    .it("creates a meeting note", (ctx) => {
      expect(ctx.stdout).to.contain("New meeting note created");
    });

  test
    .stdout()
    .command(["create", "todo", "test"])
    .it("creates a todo note", (ctx) => {
      expect(ctx.stdout).to.contain("New todo note created");
    });

  test
    .stdout()
    .command(["create"])
    .it("creates a new note", (ctx) => {
      expect(ctx.stdout).to.contain("New note created");
    });

  after(() => {
    const dirCont = fs.readdirSync('./test/');
    const files = dirCont.filter((file) => file.match(/.md/ig));
    files.forEach((file) => {
      fs.unlinkSync(`./test/${file}`);
    });
  });
});
