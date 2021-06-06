import { expect, test } from "@oclif/test";

describe("create", () => {
  test
    .stdout()
    .command(["create", "meeting", "test"])
    .it("creates a meeting note", (ctx) => {
      // console.log(ctx);
      expect(ctx.stdout).to.contain("New meeting note created");
    });

  test
    .stdout()
    .command(["hello", "--name", "jeff"])
    .it("runs hello --name jeff", (ctx) => {
      expect(ctx.stdout).to.contain("hello jeff");
    });
});
