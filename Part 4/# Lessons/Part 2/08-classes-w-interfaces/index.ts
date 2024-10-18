/*
  Classes with Interfaces


*/

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

// #
interface hasFormatter {
  format(): string
}

// # keyword = <implements> -> interfaces
class MenuItem implements hasFormatter {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - £${this.price}`
  }

  format() {
    return `This menu item is called ${this.title} and is £${this.price}`
  }
}

// # keyword = <extends> -> classes
class Pizza extends MenuItem {
  private base: Base = 'classic'
  private toppings: string[] = []

  constructor(title: string, price: number) {
    super(title, price)
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

// select base
pizza.selectBase('garlic')

// add items
pizza.addTopping('mushrooms')
pizza.addTopping('peppers')
pizza.addTopping('olives')

function printFormatted(val: hasFormatter): void {
  console.log(val.format())
}

printFormatted(pizza)
