/*
  Generics - Default Value


*/

// 1.
interface StoreData<T> {
  data: T[]
}

// it is ok if we have <number>
const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
}

// but in some case > if we don't know the type of data > err
// const randomStuff: StoreData = {
//   data: ['random', 1],
// }

// 2. \\\\\\\\\\\\\\\\\\\\\
// hard code > <any>
const randomStuff: StoreData<any> = {
  data: ['random', 1],
}
