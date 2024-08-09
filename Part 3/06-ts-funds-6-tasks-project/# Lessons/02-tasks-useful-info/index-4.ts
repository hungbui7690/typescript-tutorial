/*
  Non-Null Assertion

*************************

  - ctrl + click on querySelector
    + querySelector<E extends Element = Element>(selectors: string): E | null;
      -> extends props & methods from Element object 
      -> default type is Element 
      -> return E or null


*/

// 1.
// Method 1: from what we learn -> we need to provide the Element E -> HTMLButtonElement
const btn = document.querySelector<HTMLButtonElement>('.selector')! // now we don't get back the Element | null -> but HTMLButtonElement | null
btn.disabled = true

// Method 2: Type Assertion -> <as>
const btnX = document.querySelector('.selector')! as HTMLButtonElement
btnX.disabled = true

// 2. we don't have to check for this -> since we use non-null assertion -> !
// if (btn3) btn3.disabled = true
