/*
  Type Assertion


*/

/*
  Case 3: this is a real situation
  1. we have Status.Pending
  2. then we save it to DB
  3. after that, we need to take out 'pending' (which before is Status.Pending) from DB 
  4. error appear -> since 'pending' now is not Status.Pending anymore
*/

// \\\\\\\\\\\\\\\\\\\\\\
// 1.
enum Status {
  Pending = 'pending',
  Declined = 'declined',
}
type User = {
  name: string
  status: Status
}

// 2. save Status.Pending to DB as a string

// 3. retrieve string from the DB
const statusValue = 'pending'

// 4. from the type alias User, status has the type of Status, not string -> TS will complain -> but if we know for sure that the statusValue has type of Status -> we can use type assertion here
// const user: User = { name: 'john', status: statusValue }
const user: User = { name: 'john', status: statusValue as Status }
