/**
 * Represents a Project folder (directory on the filesystem)
 */
export default class Project {
  path: string;

  constructor(args: {path: string}) {
    this.path = args.path
  }

  // public getTree(): Tree {
  //   return {
  //     name: this.path
  //   }
  // }
}
