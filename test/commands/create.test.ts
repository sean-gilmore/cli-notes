import { expect, test } from "@oclif/test";

describe("create", () => {
  test
    .stdout()
    .command(["create", "meeting", "test"])
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

  test
    .stdout()
    .command(["hello", "--name", "jeff"])
    .it("runs hello --name jeff", (ctx) => {
      expect(ctx.stdout).to.contain("hello jeff");
    });
});
