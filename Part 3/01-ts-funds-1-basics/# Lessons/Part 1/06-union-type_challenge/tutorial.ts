/*
  Union Type - Challenge


*/

// 1. Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'.
// Then, try to assign it the values 'shipped' and 'delivered'.
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
orderStatus = 'shipped'
orderStatus = 'delivered'
orderStatus = 'cancelled'

// 2. Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.
let discount: number | string = 20
discount = '20%'
discount = false
