/*
  Making a Class
  - for typescript -> when we create classes -> we need step 1 and 2


*/

//-------------
// classes 101
//-------------

type Base = 'classic' | 'thick' | 'thin' | 'garlic' // literal type

class Pizza {
  // 1.
  title: string
  price: number
  base: Base = 'classic'
  toppings: string[] = []

  // 2.
  constructor(title: string, price: number) {
    this.title = title
    this.price = price
  }

  addTopping(topping: string): void {
    this.toppings.push(topping)
  }
  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping)
  }
  selectBase(b: Base): void {
    this.base = b
  }
}

const pizza = new Pizza('mario special', 15)

pizza.selectBase('garlic')
pizza.addTopping('mushrooms')
pizza.addTopping('olives')

console.log(pizza)
