/*
  Generics - Inferred Type and Type Constraints
  - <extends> -> type constraints
  - <T extends string>
    -> T can only be string

  - <T extends number | string>
    -> T can only be either number or string


*/

// \\\\\\\\\\\\\\\\\\\\\\\\
// 1. REACT
// \\\\\\\\\\\\\\\\\\\\\\\\
// const [name, setName] = useState('') // we will see this when we work with React > useState() is generic > since we can pass any type there > in this case, it will infer the type for us
// const [products, setProducts] = useState<Product[]>([]) // this is the case when we set the type by ourselves

// 2. Generic Constraint -> type can ONLY be a string
function processValue1<T extends string>(value: T): T {
  console.log(value)
  return value
}

// 3. Generic Constraint -> type can ONLY be either a number or a string.
function processValue2<T extends number | string>(value: T): T {
  console.log(value)
  return value
}

processValue2('hello')
processValue2(12)
// processValue2(true) // type can only be number | string -> err
