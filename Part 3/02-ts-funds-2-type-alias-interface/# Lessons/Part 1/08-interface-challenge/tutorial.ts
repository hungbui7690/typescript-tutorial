/*
  Challenge
  - Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
    -> Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
    -> Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.


*/

// 1. Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
interface Computer {
  readonly id: number // readonly -> cannot be changed once initialized
  brand: string
  ram: number // in GB
  storage?: number // optional

  // Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
  upgradeRam(amount: number): number
}

// 2. Now that we have our interface, we can create an object that adheres (sticks) to this interface.
// -> This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
const laptop: Computer = {
  id: 1,
  brand: 'random brand',
  ram: 8,
  upgradeRam(amount: number) {
    this.ram += amount
    return this.ram
  },
}

// 3. Finally, we can use our object.
laptop.storage = 256 // assigning value to optional property

// We can call its upgradeRam method to increase its RAM.
console.log(laptop.upgradeRam(4)) // upgrades RAM by 4GB
console.log(laptop)
