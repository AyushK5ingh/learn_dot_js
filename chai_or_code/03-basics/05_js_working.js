/* 
===========================================
   How JavaScript Executes Code
===========================================

JavaScript code runs inside an Execution Context.
Think of this as the environment or wrapper where 
your code is evaluated and executed. 

This is managed by the Call Stack.
*/


/* 
===========================================
   Types of Execution Context
===========================================

1. Global Execution Context (GEC):
   - Default context where code starts running.
   - Creates a global object (`window` in browsers, `global` in Node.js).
   - Creates a special variable called `this`.
   - Only one GEC exists.

2. Function Execution Context (FEC):
   - Created whenever a function is called.
   - Each function has its own execution context.
   - Contains local variables, arguments, and its own `this`.

3. Eval Execution Context:
   - Created when code runs inside `eval()`.
   - Rarely used (not recommended).
*/


/* 
===========================================
   Phases of Execution Context
===========================================
Every Execution Context is created in 2 phases:
*/


// -------------------- Phase 1: Memory Creation (Hoisting) --------------------
console.log(myVar);      // undefined (hoisted with value "undefined")
console.log(myFunc);     // [Function: myFunc]
// console.log(myLet);   // ❌ ReferenceError (TDZ for let/const)

var myVar = "I am a variable";
let myLet = "I am a let";

function myFunc() {
  console.log("Hello!");
}

/*
During Memory Creation Phase:
1. var myVar → allocated in memory as "undefined".
2. let myLet → allocated but uninitialized (Temporal Dead Zone).
3. myFunc   → entire function stored in memory.
*/


// -------------------- Phase 2: Code Execution --------------------
console.log(myVar);   // "I am a variable"

myFunc();             // Executes → "Hello!"

/*
During Code Execution Phase:
1. "myVar" gets assigned "I am a variable".
2. "myFunc()" is called, creating a new Function Execution Context.
*/


/* 
===========================================
   The Call Stack
===========================================

- JavaScript uses a Call Stack to manage Execution Contexts.
- Follows LIFO (Last In, First Out).
- Steps:
   1. GEC is created and pushed.
   2. Each function call → new FEC pushed.
   3. Function finishes → FEC popped.
   4. Program ends → GEC popped.
*/


// -------------------- Call Stack Example --------------------
function first() {
  console.log("Entering first()");
  second();
  console.log("Exiting first()");
}

function second() {
  console.log("  Entering second()");
  third();
  console.log("  Exiting second()");
}

function third() {
  console.log("    Inside third()");
}

// Start program
first();
console.log("Program finished.");

/*
Execution Trace:

1. GEC created → pushed on stack
   Call Stack: [ GEC ]

2. first() called → new FEC created
   Logs: "Entering first()"
   Call Stack: [ first FEC, GEC ]

3. second() called inside first
   Logs: "  Entering second()"
   Call Stack: [ second FEC, first FEC, GEC ]

4. third() called inside second
   Logs: "    Inside third()"
   Call Stack: [ third FEC, second FEC, first FEC, GEC ]

5. third() finishes → popped
   Call Stack: [ second FEC, first FEC, GEC ]

6. Logs: "  Exiting second()", second() finishes → popped
   Call Stack: [ first FEC, GEC ]

7. Logs: "Exiting first()", first() finishes → popped
   Call Stack: [ GEC ]

8. Logs: "Program finished."
   GEC popped → Stack empty.
*/
