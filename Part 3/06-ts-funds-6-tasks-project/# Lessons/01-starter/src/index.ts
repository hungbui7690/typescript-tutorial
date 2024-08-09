/*
  Setup TS Project with Vite
  1. Install
    ~~ npm init -y
    ~~ npm install vite --save-dev
    ~~ npm install typescript --save-dev

  2. tsconfig.json

  3. index.html 
    -> <script type="module" src="/src/index.ts"></script>

  4. package.json
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "serve": "vite preview"
      },


**************************

  5. npm run dev
  6. npm run build


*/

import './css/tasks.css' // no need this line

console.log('Task App')
