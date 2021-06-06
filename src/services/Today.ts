export default class Today {
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;

  constructor(time?: string) {
    let date;
    if (time) {
      date = new Date(time);
    } else {
      date = new Date();
    }

    this.day = ("0" + date.getDate()).slice(-2);

    this.month = ("0" + (date.getMonth() + 1)).slice(-2);

    this.year = date.getFullYear().toString();

    this.hour = date.getHours().toString();

    this.minute = date.getMinutes().toString();
  }

  date(args?: { separator?: string }): string {
    const separator = (args && args.separator) ?? '/';
    return `${this.year}${separator}${this.month}${separator}${this.day}`;
  }

  time(): string {
    return `${this.hour}:${this.minute}`;
  }
}
