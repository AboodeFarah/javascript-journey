# JavaScript Asynchronous Programming

---

# Topics Covered

- Asynchronous vs Synchronous (Blocking vs Non-Blocking)
- Callbacks
- Promises
- Async / Await
- HTTP Requests (GET & POST)
- JSON (JavaScript Object Notation)
- Fetching data from API and local JSON file

---

# 1. Asynchronous vs Synchronous

## Synchronous (Blocking)

- Code runs **line by line**
- Each task must finish before the next starts
- Can **block the program**

Example:
- `alert()` stops everything until user clicks OK

### Key Idea:
> One task at a time (slow but simple)

---

## Asynchronous (Non-Blocking)

- Code does **not wait**
- Tasks run in the background
- Program continues executing

Example:
- `setTimeout()`
- API calls

### Key Idea:
> Faster and more efficient (used in real apps)

---

# 2. Callbacks

A **callback** is a function passed into another function as an argument.

It is executed **after a task is completed**.

### Use Case:
- Perform operations after data is ready

### Example Idea:
- Pass `add`, `multiply`, or `subtract` into a function

### Key Idea:
> "Run this function after finishing the task"

---

# 3. Promises

A **Promise** represents a value that may be available:

- ✅ Resolved (success)
- ❌ Rejected (error)

### Structure:

- `resolve()` → success
- `reject()` → error
- `.then()` → handle success
- `.catch()` → handle error

### Key Idea:
> Cleaner way to handle async operations than callbacks

---

# 4. Async / Await

`async/await` is a modern way to work with promises.

- `async` → makes a function return a promise
- `await` → waits for the result

### Benefits:

- Cleaner and readable code
- Looks like synchronous code
- Easier error handling with `try...catch`

### Key Idea:
> Best way to handle async code in modern JavaScript

---

# 5. HTTP Requests

Used to communicate with APIs (servers).

## GET Request

- Used to **fetch data**

## POST Request

- Used to **send data**

### Important Concepts:

- `fetch()` → make request
- `response.ok` → check success
- `response.json()` → convert data

### Key Idea:
> Used in real apps to connect frontend and backend

---

# 6. JSON (JavaScript Object Notation)

JSON is a format used to **store and exchange data**.

### Two Important Methods:

- `JSON.stringify()` → Object → JSON string
- `JSON.parse()` → JSON string → Object

### Key Idea:
> JSON is used in APIs and data storage

---

# 7. Fetching JSON Data (Real Example)

This project includes a **local JSON file (`data.json`)**.

### Flow:

1. Fetch data using `fetch()`
2. Convert to JSON
3. Use the data in your application

### Key Idea:
> Same concept used when working with real APIs

---

# Learning Outcomes

After this lesson, you will understand:

- How JavaScript handles asynchronous tasks
- Difference between blocking and non-blocking code
- How to use callbacks, promises, and async/await
- How to fetch data from APIs and files
- How JSON works in real-world applications
