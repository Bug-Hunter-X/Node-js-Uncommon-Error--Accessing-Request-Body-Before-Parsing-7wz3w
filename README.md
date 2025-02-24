# Node.js Uncommon Error: Accessing Request Body Before Parsing

This repository demonstrates a common yet often overlooked error in Node.js when handling HTTP requests: attempting to access the request body (req.body) before it has been parsed.  This typically leads to an undefined error. 

The `bug.js` file showcases the incorrect approach, while `bugSolution.js` provides the correct method.

## Problem:

In the incorrect example, the code tries to access `req.body` directly within the `http.createServer` callback.  However, at this point, the request body hasn't been parsed yet, resulting in `req.body` being `undefined`.

## Solution:

The correct approach involves using the 'data' and 'end' events of the incoming request.  The 'data' event handles chunks of the request body, and the 'end' event indicates that the entire body has been received.  The body is then parsed using `JSON.parse()`, and appropriate error handling is implemented.