/*
  Challenge
  - Create the printStaffDetails function: 
    -> This function should accept a parameter of type Staff. 
    -> Inside the function, use a type guard to check if the 'employees' property exists in the passed object. 
        # If it does, print a message indicating that the person is a manager and the number of employees they manage. 
        # If it doesn't, print a message indicating that the person is an employee and the department they belong to.

  - Create Employee and Manager objects: Create two Employee objects. 
    -> One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

  - Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.


*****************************

  - "in": this is a kind of type-guard
    -> "property" in "object"
  
  - Example: 
      const object = {
        name: "Joe",
        age: 18
      }
  
      if('name' in object){}

*/

type Employee = { id: number; name: string; department: string }
type Manager = { id: number; name: string; employees: Employee[] }
type Staff = Employee | Manager

/*
  - staff === manager -> CANNOT get "staff.department"
  - staff === manger -> CAN get "staff.employees"
  - staff === employee -> CAN get "staff.department"
*/
function printStaffDetails(staff: Staff) {
  // "in" as type guard -> we need to pick the property in the object -> 'employees' is the property of 'type Manager'
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a MANAGER of ${staff.employees.length} employees.`
    )
  } else {
    console.log(
      `${staff.name} is an EMPLOYEE in the ${staff.department} department.`
    )
  }
}

const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' }
const steve: Employee = { id: 1, name: 'Steve', department: 'HR' }
const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] }

printStaffDetails(alice) // Alice is an EMPLOYEE in the Sales department.
printStaffDetails(bob) // Bob is a MANAGER of 2 employees.
