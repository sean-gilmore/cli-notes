/**
 * Represents a Project folder (directory on the filesystem)
 */
export default class Project {
  path: string;
  name = '';
  projects: Array<Project>;

  constructor(args: {path: string, projects: Array<Project>}) {
    this.path = args.path;
    this.projects = args.projects;
  }
}
