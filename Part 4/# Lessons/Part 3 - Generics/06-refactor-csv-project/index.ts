/*
  CSV Writer Refactor
  - interface Person {
      name: string;
      age: number;
    }
    -> `keyof Person` -> union type of "name" and "age" -> "name" | "age"



*/

//-----------------------
// CSV Writer - Refactor
//-----------------------

import { appendFileSync } from 'fs'

// #
export class CSVWriter<T> {
  private csv: string

  // # T is an object with properties -> keyof T = union of keys of T
  constructor(private columns: (keyof T)[]) {
    this.csv = this.columns.join(',') + '\n'
  }

  save(filename: string): void {
    appendFileSync(filename, this.csv)
    this.csv = '\n'

    console.log('file saved to', filename)
  }

  // #
  addRows(values: T[]): void {
    let rows = values.map((v) => this.formatRow(v))

    this.csv += rows.join('\n')
  }

  // #
  private formatRow(values: T): string {
    return this.columns.map((col) => values[col]).join(',')
  }
}
