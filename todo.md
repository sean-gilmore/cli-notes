# TODO

- Should be able to initialise a new notes project
  - Create "init" command
    - Stub to just create in current directory
      - Store location in filesystem in config
    - Future version will allow for configuring a location
- Should be able to load the notes project from a config file
  - Create a "Config" class, that can read and write settings about the project
- Figure out how to model the file tree
  - Recursive tree lookup?
  - All leaves of tree manually defined?
  - All leaves of tree stored in SQLite DB?
- Should be able to define a project root, so that all your notes at least start at the top level of that project
  - This should be defined via a config file
  - Should be able to run a command to create a project in a directory
  - Should put a file in a default location so that we can remember where that directory was, and then always go back to it with new notes
- Configure github action to run tests
- Setup to publish versions of package to NPM
