import {Command, flags} from '@oclif/command'

export default class Create extends Command {
  static description = 'Creates a new note';

  static examples = [
    `$ notes create
new file created!
    `,
  ]

  async run() {
    const {args, flags} = this.parse(Create)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from ./src/commands/hello.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
