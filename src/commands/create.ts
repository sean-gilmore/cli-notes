import { Command, flags } from '@oclif/command'

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

    this.log(`meeting notes ${project}`);
  }

  todo() {

    this.log('todo notes');
  }

  default() {
    this.log('default notes');
  }
}
