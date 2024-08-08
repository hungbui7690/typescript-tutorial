/*

  1. Install packages: 
    ~~ npm install -g typescript ts-node
    ~~ npm install -g nodemon
    ~~ npm init --yes

  2. Create nodemon-config.json
    - This file instructs nodemon to watch for the code changes in the src directory with the extension ts and js and execute the ./src/app.ts file using the ts-node command.
        {
          "watch": ["src"],
          "ext": ".ts,.js",
          "ignore": [],
          "exec": "ts-node ./src/index.ts"
        }

  3. package.json
        "scripts": {
          "start": "nodemon --config nodemon-config.json"
        },

*/

console.log('Hi there!!')
