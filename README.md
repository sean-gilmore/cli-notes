# cli-notes

A command line application for creating plain text notes

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli-notes.svg)](https://npmjs.org/package/cli-notes)
[![Downloads/week](https://img.shields.io/npm/dw/cli-notes.svg)](https://npmjs.org/package/cli-notes)
[![License](https://img.shields.io/npm/l/cli-notes.svg)](https://github.com/sean-gilmore/cli-notes/blob/master/package.json)

- [cli-notes](#cli-notes)
- [Usage](#usage)
- [Commands](#commands)
  - [`notes hello [FILE]`](#notes-hello-file)
  - [`notes help [COMMAND]`](#notes-help-command)
  - [`notes create [COMMAND]`](#notes-create-command)
- [Development Instructions](#development-instructions)
  - [Running the CLI in development mode](#running-the-cli-in-development-mode)

# Usage

```sh-session
$ npm install -g cli-notes
$ notes COMMAND
running command...
$ notes (-v|--version|version)
cli-notes/0.0.0 darwin-x64 node-v14.15.5
$ notes --help [COMMAND]
USAGE
  $ notes COMMAND
...
```
# Commands

* [`notes hello [FILE]`](#notes-hello-file)
* [`notes help [COMMAND]`](#notes-help-command)
* [`notes create [COMMAND]`](#notes-create-command)

## `notes hello [FILE]`

Describe the command here

```
USAGE
  $ notes hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ notes hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/sean-gilmore/cli-notes/blob/v0.0.0/src/commands/hello.ts)_

## `notes help [COMMAND]`

Display help for notes

```
USAGE
  $ notes help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `notes create [COMMAND]`

Create a new note

```
USAGE
  $ notes create [TYPE]

ARGUMENTS
  COMMAND  Type of note to create. Accepts "meeting", "todo", or leave blank

OPTIONS
  --project
```

-----------------

# Development Instructions

## Running the CLI in development mode

You can run the CLI while developing, as follows:

```sh-session
$ ./bin/run help
```

This will run the help command directly, without needing to re-build and re-install the package.

-----------------
