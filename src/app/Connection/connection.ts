

export class Connection {
  departure: Date;
  platform: number;


  calculateTime(): string {
    const currentDate: Date = new Date();
    const timeDifference: number = Math.round((this.departure.getTime() - currentDate.getTime()) / 1000 / 60);
    if (timeDifference <= 0 ) {
      return '< 1';
    }
    return timeDifference.toString();
  }

}
