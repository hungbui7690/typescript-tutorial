/*
  Generics - Default Value


*/

// 1. another way to fix is to use default value <T=any> or <T= any default value>
interface StoreData<T = any> {
  data: T[]
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
}

// 2. with default value above -> we also don't need to provide <any> here
const randomStuff: StoreData = {
  data: ['random', 1],
}
