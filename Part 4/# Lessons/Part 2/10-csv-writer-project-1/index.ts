/*
  CSV Writer Project


*/

//--------------------
// CSV Writer Project
//--------------------

interface Payment {
  id: number
  amount: number
  to: string
  notes: string
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[] // # array of these strings

class CSVWriter {
  private csv: string // csv = data

  constructor(private columns: PaymentColumns) {
    this.csv = this.columns.join(',') + '\n'
  }

  addRows(values: Payment[]): void {
    let rows = values.map((v) => this.formatRow(v))
    this.csv += rows.join('\n')
    console.log(this.csv)
  }

  private formatRow(p: Payment): string {
    return this.columns.map((col) => p[col]).join(',')
  }
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes'])

writer.addRows([
  { id: 1, amount: 50, to: 'yoshi', notes: 'for design work' },
  { id: 2, amount: 50, to: 'yoshi', notes: 'for design work' },
])
// id,amount,to,notes
// 1,50,yoshi,for design work
// 2,50,yoshi,for design work
