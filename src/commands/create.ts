import { Command, flags } from '@oclif/command';
import Note from '../services/Note';
import Today from '../services/Today';

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
    project: flags.boolean({char: 'p'}),
  }


  static description = 'Creates a new note';

  static examples = [
    `$ notes create
new file created!
    `,
  ];

  async run(): Promise<void> {
    const { args, flags } = this.parse(Create);
    const project = flags.project;
    const type = args.type;
    const title = args.title ? args.title : this.defaultNoteTitle(type);

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
    const content = `# Meeting on ${today.date({separator: '/'})} at ${today.time()}

## Attendees

-

## Notes

-`;

    const formattedTitle = `${today.date({separator: '-'})}_${title}`;

    const note = new Note({
      fileName: formattedTitle, extension: 'md', content: content
    });

    note.write();

    this.log(`New meeting note created: ${note.fullName()}`);
  }

  todo(project: boolean, title: string): void {
    const today = new Today();
    const formattedTitle = `${today.date({separator: '-'})}_${title}`;
    const content = `# TODO

-
    `;

    const note = new Note({
      fileName: formattedTitle, extension: 'md', content: content
    });

    note.write();

    this.log(`New meeting note created: ${note.fullName()}`);
  }

  default(project: boolean, title: string): void {
    const today = new Today();
    const formattedTitle = `${today.date({separator: '-'})}_${title}`;
    const content = `# ${title}`;

    const note = new Note({
      fileName: formattedTitle, extension: 'md', content: content
    });

    note.write();

    this.log(`New meeting note created: ${note.fullName()}`);
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
