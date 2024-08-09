/*
  Typescript Declaration File

  1. npm i bcryptjs

  5. DefinitelyTyped: https://github.com/DefinitelyTyped/DefinitelyTyped
    -> repo which contains the types for most of the packages
    -> go to "types/bcryptjs"
    => npm i @types/bcryptjs

  6. the way we install is using this command: 
    -> npm install --save-dev @types/bcryptjs
    -> after install, we can see all of properties, methods... for bcryptjs


*/

// @ts-ignore
import { z } from 'zod' // 1.

// z.  // 2. when we use library, it should be same -> Ts knows about everything > check pic

import bcryptjs from 'bcryptjs' // 3. Could not find a declaration file for module 'bcryptjs'
// bcryptjs. // 4. after install @types/bcryptjs -> we can use props & methods
