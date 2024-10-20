/*
  Non-Null Assertion


****************************

  # Methods & Props


*/

// Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit.
// -> It only has methods and properties common to all kinds of elements.
// -> More specific classes inherit from Element.
const btn = document.querySelector('.selector')!

// btn. // *** it does not show the "disabled" property -> just show the common props & methods -> since TS does not sure that this element is a button or not
