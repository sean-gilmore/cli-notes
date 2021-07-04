# TODO

- Should be able to load the notes project from a config file
  - Create a "Config" class, that can read and write settings about the project
- Figure out how to model the file tree
  - Recursive tree lookup?
  - All leaves of tree manually defined?
  - All leaves of tree stored in SQLite DB?
- Configure github action to run tests
- Setup to publish versions of package to NPM


## Config/Init

- Create test for Init Command
  - Test that it will put the config file where you want it to go
- Create test for loading config from JSON
