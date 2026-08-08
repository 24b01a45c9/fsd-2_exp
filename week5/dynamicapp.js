const express = require('express');
const app = express();

const PORT = 3000;

// 1. ROUTE PARAMETERS (Identify a specific item)
// Example URL: http://localhost:3000/user/123

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    res.send(`<h2>User Profile</h2>
              <p>You are viewing the profile for User ID: ${userId}</p>`);
});


// 2. MULTIPLE ROUTE PARAMETERS
// Example URL: http://localhost:3000/flights/from/to

app.get('/flights/:from/:to', (req, res) => {
    const { from, to } = req.params;

    res.send(`Searching for flights departing from <b>${from}</b>
              arriving at <b>${to}</b>.`);
});


// 3. QUERY PARAMETERS (Filter or Search)
// Example URL:
// http://localhost:3000/search?category=books&sort=price

app.get('/search', (req, res) => {
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Search Results",
        category: category || "None",
        sortingBy: sort || "Default"
    });
});

app.get('/', (req, res) => {
    res.send('Dynamic URL Express Server is running!');
});
// START SERVER
app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});