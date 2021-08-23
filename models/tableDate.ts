class TableData {
  year: number;
  month: string;
  lessonsInThisMOnth: number;

  constructor(year: number, month: string, lessonsInThisMOnth?: number) {
    this.year = year;
    this.month = month;
    this.lessonsInThisMOnth = lessonsInThisMOnth ? lessonsInThisMOnth : 8;
  }
}

export default TableData;
