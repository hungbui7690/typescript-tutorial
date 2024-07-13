/*
  Setup 
  - The following tools you need to set up to start with TypeScript:

      + Node.js – Node.js is the environment in which you will run the TypeScript compiler. Note that you don’t need to know node.js.
      + TypeScript compiler – a Node.js module that compiles TypeScript into JavaScript. If you use JavaScript for node.js, you can install the ts-node module. It transforms TypeScript into JavaScript, allowing you to execute TypeScript on Node.js directly without precompiling. 


    ~~ npm install -g typescript
    ~~ tsc --v
    ~~ tsc --init

  - ts-node is a TypeScript execution engine and REPL for Node.js.
    > It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling. 
    > This is accomplished by hooking node's module loading APIs, enabling it to be used seamlessly alongside other Node.js tools and libraries.

  - To install the ts-node module globally, you run the following command from the Terminal on macOS and Linux or Command Prompt on Windows:

    ~~ npm install -g ts-node

*/

let message: string = 'Hello, World!'
console.log(message)
