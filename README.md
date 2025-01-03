# Firebase Asynchronous Operation Error

This repository demonstrates a common error in Firebase when handling asynchronous operations, specifically accessing data from a document snapshot before the promise has resolved.  The `bug.js` file showcases the incorrect implementation, while `bugSolution.js` provides the corrected version using async/await.

## Problem
Attempting to access data from a Firebase document snapshot before it's fully loaded leads to unpredictable results or errors. The error message may not always be clear, making it difficult to pinpoint the issue. 

## Solution
Use async/await or promises correctly to ensure the data is fully loaded before accessing it. The `bugSolution.js` file demonstrates this with the use of `await`. 

## How to run
1.  Make sure you have Node.js and npm installed.
2. Install firebase: `npm install firebase`
3.  Configure your Firebase project.
4. Replace placeholders with your Firebase config.
5. Run the script using: `node bug.js` and `node bugSolution.js`