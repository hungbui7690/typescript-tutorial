/*
  Classes as Types


*/

type Base = 'classic' | 'thick' | 'thin' | 'garlic'

class Pizza {
  private base: Base = 'classic'
  private toppings: string[] = []

  constructor(private title: string, private price: number) {}

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

// # explicit
const pizzaOne: Pizza = new Pizza('mario special', 15)

// inferred
const pizzaTwo = new Pizza('luigi special', 10)

// # class as type
function addMushroomsToPizzas(pizzas: Pizza[]): void {
  for (const p of pizzas) {
    p.addTopping('mushrooms')
  }
}

addMushroomsToPizzas([pizzaOne, pizzaTwo])

console.log(pizzaOne, pizzaTwo)
