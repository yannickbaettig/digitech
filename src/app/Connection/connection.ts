

export class Connection {
  departure: Date;
  platform: number;

/*  constructor(values: Object = {}) {
    Object.assign(this, values);
  }*/

  calculateTime(): number {
    const currentDate: Date = new Date();
    const timeDifference: number = Math.round((this.departure.getTime() - currentDate.getTime()) / 1000 / 60);
    return timeDifference;
  }

}
