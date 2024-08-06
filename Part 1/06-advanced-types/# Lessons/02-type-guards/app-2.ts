/*
  Type Guards
  - allow you to narrow down the type of a variable within a conditional block.

*/

// instanceof

// Similar to the typeof operator, TypeScript is also aware of the usage of the instanceof operator. For example:
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

function signContract(partner: BusinessPartner): string {
  let message: string

  // Inside the following if block, TypeScript knows that the partner is an instance of the Customer type due to the instanceof operator:
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue'
  }

  // Likewise, TypeScript knows that the partner is an instance of Supplier inside the following if block:
  if (partner instanceof Supplier) {
    message = partner.isInShortList()
      ? 'Sign a new contract the supplier'
      : 'Need to evaluate further'
  }

  return message
}

/*
  How it works:

    First, declare the Customer and Supplier classes.
    Second, create a type alias BusinessPartner which is a union type of Customer and Supplier.
    Third, declare a function signContract() that accepts a parameter with the type BusinessPartner.
    Finally, check if the partner is an instance of Customer or Supplier, and then provide the respective logic.
*/

// When an if narrows out one type, TypeScript knows that within the else it is not that type but the other. For example:
function signContractX(partner: BusinessPartner): string {
  let message: string
  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? 'Sign a new contract with the customer'
      : 'Credit issue'
  } else {
    // must be Supplier
    message = partner.isInShortList()
      ? 'Sign a new contract with the supplier'
      : 'Need to evaluate further'
  }
  return message
}
