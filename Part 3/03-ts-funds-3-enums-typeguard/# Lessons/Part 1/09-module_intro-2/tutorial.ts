/*
  Modules - Global Scope "Gotcha"
  - pic

*******************************

  Method 1: add export keyword in actions.ts to make it becomes module -> then the error is gone 
    -> we don't need to import 


  Method 2: another way is to add setting in tsconfig: 
  - "moduleDetection" : "forced"
    -> with this one, we don't need to use export/import anymore -> and the error is gone


*/

const susan = 'susan' // 🎈: sometimes, there's name collisions with the decoration files
