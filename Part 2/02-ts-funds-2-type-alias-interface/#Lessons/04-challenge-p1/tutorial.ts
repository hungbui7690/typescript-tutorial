/*
  Challenge

*/

// Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).
type Employee = { id: number; name: string; department: string }
// Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).
type Manager = { id: number; name: string; employees: Employee[] }

// Create a Union Type: Define a type Staff that is a union of Employee and Manager.
type Staff = Employee | Manager

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' }
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' }
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] }
