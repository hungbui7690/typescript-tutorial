/*

  1. Install
    ~~ npm init -y
    ~~ npm install vite --save-dev
    ~~ npm install typescript --save-dev

  2. tsconfig.json
    ~~ tsc --int
      -> "target": "ESNext"
      -> "module": "esnext"
      -> "moduleResolution": "node",
      -> "jsx": "preserve",
      -> "skipLibCheck": true,

  3. index.html
    -> link to index.ts

  4. package.json
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "serve": "vite preview"
      },


*****************************

  - To run project: 
    -> npm run dev

  - Build project for production: 
    -> npm run build


*****************************

  .gitignore
    # node modules
    node_modules

    # built ts files
    dist

    # package-lock.json
    package-lock.json

    # configurations
    .env


*/

const app = document.getElementById('app')
if (app) {
  app.innerHTML = '<h1>TypeScript Demo!</h1>'
}
