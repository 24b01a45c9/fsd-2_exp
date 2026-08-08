const express = require('express');

const app = express();
const PORT = 3000;


// 1. BUILT-IN MIDDLEWARE
// Allows Express to read JSON data sent in POST/PUT requests.
app.use(express.json());


// 2. CUSTOM LOGGING MIDDLEWARE
// Runs for EVERY request that hits the server.
app.use((req, res, next) => {

    const timestamp = new Date().toLocaleString();

    console.log(
        `[${timestamp}] Incoming Request: ${req.method} to ${req.url}`
    );

    // Move to the next function/route
    next();
});


// 3. CUSTOM SECURITY MIDDLEWARE
// Checks whether a secret key is provided.
app.use((req, res, next) => {

    const secret = req.query.secret;

    if (secret && secret === '1234') {
        next();
    } else {
        res.status(400).send('Access Denied: Invalid or missing secret key');
    }
});


// MOCK DATABASE
let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];


// =========================
// ROUTES
// =========================
app.get('/', (req, res) => {
    res.send('REST API Server is running!');
});

// GET - Read all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});


// POST - Create a new task
app.post('/tasks', (req, res) => {

    const newTask = {
        id: req.body.id != null ? req.body.id : tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});


// PUT - Update a task
app.put('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (task) {

        task.title = req.body.title;

        res.json({
            message: "Task updated successfully",
            task: task
        });

    } else {

        res.status(404).json({
            error: "Task not found"
        });
    }
});


// DELETE - Remove a task
app.delete('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});


// START SERVER
app.listen(PORT, () => {

    console.log(`REST API Server running at http://localhost:${PORT}`);
    console.log("Listening for requests...");
    console.log("--------------------------------");
});