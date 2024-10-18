/*
  Inheritance


*/

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

class MenuItem {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - £${this.price}`
  }
}

// # inheritance
class Pizza extends MenuItem {
  private base: Base = 'classic'
  private toppings: string[] = []

  constructor(title: string, price: number) {
    super(title, price) // #
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

// #
function printMenuItem(item: MenuItem): void {
  console.log(item.details)
}

printMenuItem(pizza)
