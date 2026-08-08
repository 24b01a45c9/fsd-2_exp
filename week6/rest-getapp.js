const express = require('express');

const app = express();
const PORT = 3000;

// 1. BASIC JSON RESPONSE
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to our API",
        status: "Active",
        timestamp: new Date()
    });
});


// 2. SENDING AN ARRAY OF OBJECTS
app.get('/students', (req, res) => {
    const studentList = [
        { id: 101, name: "Alice", course: "MERN Stack" },
        { id: 102, name: "Bob", course: "Data Science" },
        { id: 103, name: "Charlie", course: "UI/UX" }
    ];

    res.json(studentList);
});


// 3. DYNAMIC JSON RESPONSE
// Example: /products/45
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;

    res.json({
        requestedProduct: productId,
        category: "Electronics",
        inStock: true,
        tags: ["Gadget", "New Arrival"]
    });
});


// START SERVER
app.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});