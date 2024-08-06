/*
  Inheritance
  - A class can reuse the properties and methods of another class. This is called inheritance in TypeScript.

  - The class which inherits properties and methods is called the child/sub class. The class whose properties and methods are inherited is known as the parent class. These names come from the nature that children inherit genes from their parents.

  - Inheritance allows you to reuse the functionality of an existing class without rewriting it.

  - JavaScript uses prototypal inheritance, not classical inheritance like Java or C#. ES6 introduces the class syntax that is simply the syntactic sugar of the prototypal inheritance. TypeScript supports inheritance like ES6.

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Suppose you have the following Person class:
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person;
}());
// To inherit a class, you use the <extends> keyword. For example the following Employee class inherits the Person class:
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employee;
}(Person));
// In this example, the Employee is a child class and the Person is the parent class.
///////////////////////////
// Constructor
// Because the Person class has a constructor that initializes the firstName and lastName properties, you need to initialize these properties in the constructor of the Employee class by calling its parent class’ constructor.
// To call the constructor of the parent class in the constructor of the child class, you use the super() syntax. For example:
var EmployeeX = /** @class */ (function (_super) {
    __extends(EmployeeX, _super);
    function EmployeeX(firstName, lastName, jobTitle) {
        var _this = 
        // call the constructor of the Person class:
        _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    return EmployeeX;
}(Person));
// The following creates an instance of the Employee class:
var employee = new EmployeeX('John', 'Doe', 'Front-end Developer');
// Because the Employee class inherits properties and methods of the Person class, you can call the getFullName() and describe() methods on the employee object as follows:
var employeeX = new EmployeeX('John', 'Doe', 'Web Developer');
console.log(employeeX.getFullName());
console.log(employeeX.describe());
////////////////////////
// Method overriding
// When you call the employee.describe() method on the employee object, the describe() method of the Person class is executed that shows the message: This is John Doe.
// If you want the Employee class has its own version of the describe() method, you can define it in the Employee class like this:
var EmployeeY = /** @class */ (function (_super) {
    __extends(EmployeeY, _super);
    function EmployeeY(firstName, lastName, jobTitle) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    EmployeeY.prototype.describe = function () {
        return _super.prototype.describe.call(this) + " I'm a ".concat(this.jobTitle, ".");
    };
    return EmployeeY;
}(Person));
// In the describe() method, we called the describe() method of the parent class using the syntax super.methodInParentClass().
// If you call the describe() method on the employee object, the describe() method in the Employee class is invoked:
var employeeY = new EmployeeY('John', 'Doe', 'Web Developer');
console.log(employeeY.describe()); // This is John Doe. I'm a Web Developer.
/*
  Summary

    Use the extends keyword to allow a class to inherit from another class.
    Use super() to call the constructor of the parent class in the constructor of the child class. Also, use the super.methodInParentClass() syntax to invoke the methodInParentClass() in the method of the child class.

*/
