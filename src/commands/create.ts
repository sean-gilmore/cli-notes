import { Command, flags } from '@oclif/command'
import Note from '../services/Note';
import Today from '../services/Today';

export default class Create extends Command {
  static args = [
    { name: 'type' }
  ];

  static flags = {
    project: flags.boolean({char: 'p'}),
  }

  static availableTypes = {
    meeting: 'meeting',
    todo: 'todo',
  };

  static description = 'Creates a new note';

  static examples = [
    `$ notes create
new file created!
    `,
  ];

  async run() {
    const { args, flags } = this.parse(Create)
    const project = flags.project;
    const type = args.type;
    const title = args.title;

    switch (type) {
      case Create.availableTypes.meeting:
        return this.meeting(project);
      case Create.availableTypes.todo:
        return this.todo(project);
      default:
        return this.default(project);
    }
  }

  meeting(project: boolean) {
    const today = new Today();
    const timeString = ``;
    const content = `# Meeting on ${today.date()} at ${today.time()}

## Attendees

## Notes`;

    const note = new Note({
      fileName: 'test', extension: 'md', content: content
    });

    note.write();
    this.log(`New meeting note created: ${note.fullName}`)
  }

  todo(project: boolean) {

    this.log('todo notes');
  }

  default(project: boolean) {
    this.log('default notes');
    // fs.write('./test');
  }
}
