# TODO

- Create "create" command
  - Should accept an optional "Project" flag
    - Project flag should accept a folder format like `Arcadian/Internal`
    - Should output error if project doesn't exist
    - if no flag is provided, it should just output to the current directory
  - Should accept a sub type:
    - meeting
      - Should prefix with datetime
      - `# Title` should be "Meeting on XXXX/XX/XX at XX:XX"
      - `## Attendees` should be added to note with new list started
      - `## Notes` should be added with nothing started
    - todo
      - `# Title` should be "TODO"
    - default
      - Should just create a blank file
