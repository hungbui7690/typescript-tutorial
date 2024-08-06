/*
  First Program

  ~~ tsc app.ts
    > generate app.js
  ~~ node app.js
    > run app.js

  - If you installed the ts-node module mentioned in the setting up TypeScript development environment, you can use just one command to compile the TypeScript file and execute the output file in one shot:
    @@ ts-node app.ts

  - Test
    1. create index.html
    2. link to app.js
    3. ts-node app.ts

*/

let message: string = 'Hello, World!'

// create a new heading 1 element
let heading = document.createElement('h1')
heading.textContent = message

// add the heading the document
document.body.appendChild(heading)

/*
  The TypeScript compiler will generate a new app.js file and the Live Server will automatically reload it on the web browser.

  Note that the app.js is the output file of the app.ts file, therefore, you should never directly change its contents, or you’ll lose the changes once you recompile the app.ts file.
*/
