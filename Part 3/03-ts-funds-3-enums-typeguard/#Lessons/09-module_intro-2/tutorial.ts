/*
  Modules - Global Scope "Gotcha"
  - If your TypeScript files aren't modules (i.e., they don't have any import or export statements), they're treated as scripts in the global scope. 
    > In this case, declaring the same variable in two different files would cause a conflict.

  (1) add export keyword in actions.ts to make it becomes module > then the error is gone 
      > we don't need to import 

  *** another way is to add setting in tsconfig: 
      - "moduleDetection" : "forced"
        > pic
        > with this one, we don't need to use export/import anymore > and the error is gone

*/

import { something } from './actions' // (2)

const susan = 'susan' // *** warning: sometimes, there's name collisions with the decoration files
