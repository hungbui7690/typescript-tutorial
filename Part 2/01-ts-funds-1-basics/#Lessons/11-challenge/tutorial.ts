/*
  Challenges

*/

// 1. Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
let bike: { brand: string; year: number } = {
  brand: 'Yamaha',
  year: 2010,
}
// bike.year = 'old'; // err >> 'year' is number (not string)

// 2. Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
let laptop: { brand: string; year: number } = {
  brand: 'Dell',
  year: 2020,
}
// let laptop2: { brand: string, year: number } = { brand: 'HP' }; // err >> missing 'year'

// 3. Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.
let product1 = {
  title: 'Shirt',
  price: 20,
}
let product2 = { title: 'Pants' }

let products: { title: string; price?: number }[] = [product1, product2] // *** price is optional
// products.push({ title: 'Shoes', price: 'expensive' }); // err >> 'price' is not number
