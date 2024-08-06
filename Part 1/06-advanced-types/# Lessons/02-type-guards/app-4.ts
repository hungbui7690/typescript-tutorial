/*
  Type Guards
  - allow you to narrow down the type of a variable within a conditional block.

*/

class Customer {
  isCreditAllowed(): boolean {
    // ...
    return true
  }
}
class Supplier {
  isInShortList(): boolean {
    // ...
    return true
  }
}
type BusinessPartner = Customer | Supplier

///////////////////////////////
// User-defined Type Guards

// User-defined type guards allow you to define a type guard or help TypeScript infer a type when you use a function.
// A user-defined type guard function is a function that simply returns arg is aType. For example:
function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer
}

// In this example, the isCustomer() is a user-defined type guard function. Now you can use it in as follows:
function signContract(partner: BusinessPartner): string {
  let message: string
  if (isCustomer(partner)) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue'
  } else {
    message = partner.isInShortList()
      ? 'Sign a new contract with the supplier'
      : 'Need to evaluate further'
  }

  return message
}

/*
  Summary

    Type guards narrow down the type of a variable within a conditional block.
    Use the typeof and instanceof operators to implement type guards in the conditional blocks

*/
