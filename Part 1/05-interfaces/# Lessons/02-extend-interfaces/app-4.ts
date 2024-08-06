/*
  Interfaces vs Abstract Classes
  - Interfaces and abstract classes are both powerful tools in TypeScript for designing and organizing your code, but they serve slightly different purposes.

  - Table: 
      Aspect	                Interfaces	                                            Abstract Classes
      Purpose	                Define contractual structure.	                          Provide common functionality and structure.
      Implementation	        Contains only method signatures.	                      Can contain implemented methods and abstract methods.
      Multiple Inheritance	  Supports multiple interface implementation.	            Supports single class inheritance.
      Implementation          Flexibility	No implementation code in interfaces.	      Mixes implemented and abstract methods.
      Extensibility	          Easily extendable by adding new properties/methods.	    Can provide shared methods for derived classes.
      Constructors	          No constructors in interfaces.	                        Can have constructors for initialization.
      Type Checking	          Ensures objects adhere to the structure.	              Provides a common type and functionality.
      Instantiation	          Interfaces can’t be instantiated.	                      Abstract classes can’t be instantiated directly.
      Usage	                  Designing contracts and structure.	                    Sharing functionality among related classes.

*/
