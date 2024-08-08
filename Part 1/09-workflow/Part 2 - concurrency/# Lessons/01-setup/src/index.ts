/*
  How to Automate the Development Workflow
  
  1. create build/ & src/
  2. tsc --init
  3. tsconfig.json
    + rootdir – specifies the root directory of the TypeScript input files.
      -> "rootDir": "./src"     
    + outdir -stores the JavaScript output files.
      -> "outDir": "./build"

  4. tsc
      -> compile index.ts into index.js

  5. node index.js


********************************

  - Every time when you change the TypeScript code, you need to:
    + Build the project.
    + Run the JavaScript output files.

  - This is time-consuming.
  - Luckily, you can automate the whole process using some Node.js modules


*/

console.log('Node.js TypeScript')
