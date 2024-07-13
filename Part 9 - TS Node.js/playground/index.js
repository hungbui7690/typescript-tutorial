"use strict";
/*
  How to Automate the Development Workflow
  - The <nodemon> module allows you to automatically restart the application when you change the JavaScript source code.
  - The <concurrently> module runs multiple commands concurrently.
  
  1. execute the npm init command from the root directory of the project:

        ~~ npm init --yes

  2. Next, install the nodemon and concurrently module:

        ~~ npm install --g nodemon concurrently

  - It’ll take some time to install. Once the installation completes.
  - Note that the -g flag will instruct npm to install these two modules globally. This allows you to use them in other projects.

  3. package.json

        "scripts": {
            "start:build": "tsc -w",
            "start:run": "nodemon build/app.js",
            "start": "concurrently npm:start:*"
        },
        "main": "index.js",

    - This "start:build": "tsc -w" will watch for changes in the ./src directory and compile them automatically.
    - This "start:run": "nodemon build/app.js" will automatically run the app.js in the ./build directory whenever the new file is generated.
    - This "start": "concurrently npm:start:*" runs all the commands that start with npm:start:*, which executes both start:build and start:run commands above.
    - "main": entry point for the Node.js program
    

*/
console.log('Node.js TypeScript');
