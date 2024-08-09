/*
  Non-Null Assertion


****************************

  # Solution
    -> use !


*/

// To fix the "null" error -> use "non-null assertion"
// -> the ! operator in TypeScript is officially known as the "Non-null assertion operator".
// -> It is used to assert that its preceding expression is not null or undefined
// -> depends on the case, where we want to use ! or ?.addEventListener()
const btn = document.querySelector('.test-btn')! // ! -> we tell TS that we know for sure that <btn> is not null

btn.addEventListener('click', () => {
  console.log('something')
})
