import { DataResource } from '../services/DataResource'

export interface PizzaProps {
  title: string
  description: string
  toppings: string[]
  price: number
}

export const Pizza = new DataResource<PizzaProps>(
  'http://localhost:4000/pizzas'
)

// # later, we will use this to create a new pizza
// Pizza.save({
// 	title: 'my new pizza',
// 	description: 'yummy',
// 	toppings: ['mushrooms', 'peppers', 'olives'],
// 	price: 10,
// })
