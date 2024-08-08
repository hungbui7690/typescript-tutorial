/*
  Awaited
  - Awaited utility type allows you to extract the resolved type of a promise or other type that uses await.


*/

type promiseNumber = Promise<number>

type justNumber = Awaited<Promise<number>> // type justNumber = number
