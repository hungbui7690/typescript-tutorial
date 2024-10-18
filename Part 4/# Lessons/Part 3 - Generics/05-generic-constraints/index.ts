/*
  Generic Constraints


*/

//---------------------
// Generic Constraints
//---------------------

interface HasId {
  id: number
}

// # try to remove "extends HasId" to see the error
// after setup -> for any types of T -> it must have "id" property
class DataCollection<T extends HasId> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const i = Math.floor(Math.random() * this.data.length)
    return this.data[i]
  }
  loadAll(): T[] {
    return this.data
  }
  add(val: T): T[] {
    this.data.push(val)
    return this.data
  }
  // #
  deleteOne(id: number): void {
    this.data = this.data.filter((item) => item.id !== id) // since TS doesn't know that "id" exists in T or not -> need constraints
  }
}

// # because we setup above -> must have "id"
interface User {
  name: string
  score: number
  id: number
}

const users = new DataCollection<User>([
  { name: 'shaun', score: 125, id: 1 },
  { name: 'mario', score: 100, id: 2 },
  { name: 'peach', score: 150, id: 3 },
])

users.add({ name: 'luigi', score: 50, id: 4 })

users.deleteOne(2)
console.log('load all - ', users.loadAll())
