# Typicode-API-specs

This repository contains test specs relevant to https://jsonplaceholder.typicode.com. The specs were written using the axios library for HTTP requests and Jest framework with its in-built assertions.

To start testing, clone the repository, install its dependencies, then run the test command:
1. `git clone https://github.com/prakruti-pk/Typicode-API-specs.git`
2. `npm install`
3. `npm run test`

**Note - Since JSONPlaceholder [does not actually update](https://jsonplaceholder.typicode.com/guide/) resources on the server, query params such as `:id` have to be hardcoded, and it is not possible to test a series of requests with a newly created resource.**

Requirements followed for the route testing are: 
* Make GET, POST, PUT, and DELETE calls
* Set headers for a request
* Set the body for a request
* Assert the response from a request

