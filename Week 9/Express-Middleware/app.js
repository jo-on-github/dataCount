import express from "express";
const app = express();
const port = 3001;

// Serve static files (built in middleware)
 app.use(express.static("Public"));

// Parsing a JSON body
 app.use(express.json());


// Custom middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.path}`);
  next(); // Don't forget to call next()!
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// POST Route handler that returns the JSON Body back to the client
app.post("/", (req, res) => {
  res.json(req.body);
  console.log(res);
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});