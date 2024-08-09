/*
  Non-Null Assertion


****************************

  # Problem


*/

// 1. Element | null -> TS just can show the error in build time, not run time
// -> there will be case that we make some mistakes .test-btn(s) -> wrong class name -> null
// -> null.addEventListener() -> err
const btn1 = document.querySelector('.test-btn')

// btn1.addEventListener() is not going to work -> TS will fix for us by adding optional chaining
btn1?.addEventListener('click', () => {
  console.log('something')
})

if (btn1) {
  // do something
}
