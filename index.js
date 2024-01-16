const express = require("express")

const app = express()

app.get("/", (request, response) => {
    response.send("<h1>Hello world</h1>")
})

/*
    Challenge: 
    1. Create a new route called /register so that http://localhost:3000/login shows
    "Welcome to the register page"

    2. Create a new route called /register so that http://localhost:3000/register shows
    "Welcome to the login page"

    Hint: Refer to lines 5-7 (also readme.md step 5) on how to set up a get route! (req and res are typically used rather than
          request and response)
 */

app.listen(3000, () => {
    console.log("*** Server running on port 3000 http://localhost:3000 ***")
})