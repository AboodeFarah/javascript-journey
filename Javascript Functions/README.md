# JavaScript Functions

## What is a Function?

A **function** is a block of code designed to perform a specific task.

Functions help you:

- Organize your code  
- Reuse code  
- Avoid repetition  
- Make programs easier to read and maintain  

---

## Types of Functions

### 1. Function Declaration
- Uses the `function` keyword.
- This is the traditional way to create a function.

### 2. Function Expression
- A function assigned to a variable.
- The only difference between function declaration and function expression is the syntax.

### 3. Arrow Function (ES6)
- A shorter syntax for writing functions.
- Introduced in ES6 (ECMAScript 6).
- Makes code cleaner and more modern.

---

## Parameters and Arguments

### A. Parameter
- A **parameter** is a variable inside the function.
- Used in the function definition.
- It acts as a placeholder variable.

### B. Argument
- An **argument** is the real value you give to the function.
- Used in the function call.
- It is the actual value passed into the function.

---

## Return Value

A **return value** is the value that a function sends back after it finishes running.

- The `return` keyword is used to send a value back.
- When a function returns a value, it can be stored in a variable.
- If a function does not use `return`, it gives back `undefined`.

The return statement stops the execution of the function and sends the result back to where the function was called.

---

# JavaScript Scope

## What is Scope?

**Scope** refers to where a variable can be used in a program.

It defines the accessibility (visibility) of variables.

---

## Types of Scope

### 1. Global Scope
- If you create a variable outside any function, it is global.
- A global variable can be accessed anywhere in the program.

### 2. Local Scope
- If you create a variable inside a function, it is local.
- A local variable is private to that function.
- It cannot be accessed outside that function.

### 3. Block Scope
- Variables declared with `let` and `const` are block-scoped.
- They can only be used inside the block `{ }` where they are created.
- The `var` keyword ignores block scope and behaves differently.

---

Understanding functions, return values, and scope is very important because they are the foundation of writing clean and structured JavaScript code.
