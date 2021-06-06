export default class Today {
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;

  constructor(time?: string) {
    const timeString = time ?? '';
    const date = new Date(timeString);

    this.day = ("0" + date.getDate()).slice(-2);

    this.month = ("0" + (date.getMonth() + 1)).slice(-2);

    this.year = date.getFullYear().toString();

    this.hour = date.getHours().toString();

    this.minute = date.getMinutes().toString();
  }

  date() {
    return `${this.year}/${this.month}/${this.day}`;
  }

  time() {
    return `${this.hour}:${this.minute}`;
  }
}
