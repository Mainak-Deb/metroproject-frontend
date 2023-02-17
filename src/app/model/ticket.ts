export class Ticket{
  personCount: number;
  startStation: string;
  endStation: string;
  isReturn: boolean;

  constructor(personCount: number, startStation: string, endStation: string, isReturn:boolean){
    this.startStation = startStation;
    this.endStation = endStation;
    this.personCount = personCount;
    this.isReturn = isReturn;
  }
}
