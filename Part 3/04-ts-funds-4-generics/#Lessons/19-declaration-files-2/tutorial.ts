/*
  Typescript Declaration File

  (3) npm i bcryptjs

  (5) DefinitelyTyped: https://github.com/DefinitelyTyped/DefinitelyTyped
      > repo which contains the types for most of the packages
      > go to "types/bcryptjs"

  (6) the way we install is using this command: 
      > npm install --save-dev @types/bcryptjs
      > after install, we can see all of properties, methods... for bcryptjs

*/
import { z } from 'zod'
// z.  // (2) when we use library, it should be same > Ts knows about everything > check pic

// document. // (1) "lib": ["ES2020", "DOM.Iterable"] > if we remove "DOM" from tsconfig, then TS will yell at us here

import bcryptjs from 'bcryptjs' // (4) Could not find a declaration file for module 'bcryptjs'
