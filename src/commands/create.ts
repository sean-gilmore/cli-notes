import { Command, flags } from '@oclif/command';
import * as inquirer from 'inquirer';
import Note from '../services/Note';
import Today from '../services/Today';
import Collection from '../services/Collection';

export default class Create extends Command {
  static availableTypes = {
    meeting: 'meeting',
    todo: 'todo',
    note: 'note'
  };

  static args = [
    { name: 'type', required: false, default: 'type', options: Object.values(Create.availableTypes) },
    { name: 'title', required: false, default: '' }
  ];

  static flags = {
    project: flags.boolean({ char: 'p' }),
  }

  static description = 'Creates a new note';

  static examples = [
    `$ notes create
new file created!
    `,
  ];

  async run(): Promise<void> {
    const { args, flags } = this.parse(Create);
    let project = flags.project;
    const type = args.type;
    const title = args.title ? args.title : this.defaultNoteTitle(type);


    const tree = Collection.getTree();

    console.log(tree);
    let foundDir = false;

    let targetDir = tree;

    if (!project) {
      while (!foundDir) {
        const responses: any = await inquirer.prompt([{
          name: 'project',
          message: 'select a Project',
          type: 'list',
          choices: [{ ...targetDir, name: `${targetDir.name}`, currentDir: true }, ...targetDir.projects],
        }]);

        if (responses.project === targetDir.name) {
          project = responses.project;
          foundDir = true;
        } else {
          targetDir = targetDir.projects.find((p) => p.name === responses.project );
          // targetDir = responses.project;
        }
      }
      // project = responses.stage
    }

    // this.log(`the stage is: ${project}`)


    switch (type) {
      case Create.availableTypes.meeting:
        return this.meeting(project, title);
      case Create.availableTypes.todo:
        return this.todo(project, title);
      default:
        return this.default(project, title);
    }
  }

  meeting(project: boolean, title: string): void {
    const today = new Today();
    const content = `# Meeting on ${today.date({ separator: '/' })} at ${today.time()}

## Attendees

-

## Notes

-`;

    const formattedTitle = `${today.date({ separator: '-' })}_meeting-${title}`;

    const note = new Note({
      fileName: formattedTitle, extension: 'md', content: content, filePath: project
    });

    note.write();

    // this.log(`New meeting note created: ${note.fullName()}`);
    // this.log()
  }

  todo(project: boolean, title: string): void {
    const today = new Today();
    const formattedTitle = `${today.date({ separator: '-' })}_todo-${title}`;
    const content = `# TODO

-
    `;

    const note = new Note({
      fileName: formattedTitle, extension: 'md', content: content
    });

    note.write();

    this.log(`New todo note created: ${note.fullName()}`);
  }

  default(project: boolean, title: string): void {
    const today = new Today();
    const formattedTitle = `${today.date({ separator: '-' })}_${title}`;
    const content = `# ${title}`;

    const note = new Note({
      fileName: formattedTitle, extension: 'md', content: content
    });

    note.write();

    this.log(`New note created: ${note.fullName()}`);
  }

  private defaultNoteTitle(type: string): string {
    switch (type) {
      case Create.availableTypes.meeting:
        return 'meeting';
      case Create.availableTypes.todo:
        return 'todo';
      default:
        return 'note';
    }
  }
}
