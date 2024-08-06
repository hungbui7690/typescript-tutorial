/*
  Non-Null Assertion
  
*/
//////////////////////////
// Element | null > TS just can show the error in build time, not run time
// > there will be case that we make some mistakes .test-btn(s) > wrong class name > null
// > null.addEventListener() === err
const btn1 = document.querySelector('.test-btn')

// btn1.addEventListener() is not going to work > TS will fix for us by adding optional chaining
btn1?.addEventListener('click', () => {
  console.log('something')
})

if (btn1) {
  // do something
}

///////////////////////////
// to fix the "null" error above > we use "non-null assertion"
// > the ! operator in TypeScript is officially known as the "Non-null assertion operator".
// > It is used to assert that its preceding expression is not null or undefined
// > depends on the case, where we want to use ! or ?.addEventListener()
const btn2 = document.querySelector('.test-btn')! // ! > we tell TS that we know for sure ".test-btn" is there

btn2.addEventListener('click', () => {
  console.log('something')
})

///////////////////////////
// Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit.
// > It only has methods and properties common to all kinds of elements.
// > More specific classes inherit from Element.
const btn3 = document.querySelector('.selector')!
// btn3. // *** it does not show the "disabled" property > here it just show the common props & methods > since ts does not sure that this element is a button or not

///////////////////////////////
// check type def of querySelector<E extends Element = Element>(selectors: string): E | null; > return E | null
// Method 1: from what we learn > we need to provide the Element (E)
const btn4 = document.querySelector<HTMLButtonElement>('.selector')! // now we don't get back the Element | null > but HTMLButtonElement
btn4.disabled = true

///////////////////////////////
// Method 2: Type Assertion
const btn5 = document.querySelector('.selector')! as HTMLButtonElement
btn5.disabled = true

///////////////////////////////
// we don't have to check for this > since we use !
// if (btn3) btn3.disabled = true
