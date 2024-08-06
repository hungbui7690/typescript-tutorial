/*
  Intro
  > Key aspects:
    > Component Structure and TypeScript Integration: Explains how to correctly type React components, manage return types, and handle potential TypeScript errors.
    > Prop Handling and Typing: Offers insights on inline typing, using interfaces, and managing children props with TypeScript.
    > State Management: Teaches TypeScript type inference in state management, showcasing various useState examples.
    > Event Handling: Guides on typing events in React, such as form submissions and input changes.
    > Complex Component Structures: Discusses complex use cases like conditional prop rendering based on type values.
    > Context API with TypeScript: Provides a deep dive into using React's Context API in a TypeScript environment.
    > Reducers and Global State Management: Includes examples of setting up reducers with TypeScript and using them in React components.
    > Data Fetching: Demonstrates fetching data with TypeScript validation using tools like Zod, Axios, and React Query.
    > Redux Toolkit (RTK) Integration: Shows how to integrate Redux Toolkit in a TypeScript>React setup, including creating slices and using hooks.
    > Practical Application with Task Management: Concludes with a practical task management application, emphasizing localStorage use and handling task state.

//////////////////////////////
  Setup
  - npm create vite@latest react-typescript -- --template react-ts
  - remove boiler plate

  - logic, data files: 
    > .ts 
  - component files:
    > .tsx

  *** to hide "unused var" warning > go to .eslintrc.cjs
        rules: {
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': 'off',
        },

*/

function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
    </main>
  )
}

export default App
