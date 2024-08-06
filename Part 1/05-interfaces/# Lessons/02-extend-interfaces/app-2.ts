/*
  Extend Interfaces

*/

interface A {
  a(): void
}

interface B extends A {
  b(): void
}

/////////////////////////////
// Interfaces extending multiple interfaces

// An interface can extend multiple interfaces, creating a combination of all the interfaces. For example:
interface C {
  c(): void
}

interface D extends B, C {
  d(): void
}

// In this example, the interface D extends the interfaces B and C. So D has all the methods of B and C interfaces, which are a(), b(), and c() methods.
