const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve index.html
app.use(express.static(path.join(__dirname)));

// Simple API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from your Node.js backend on Render! 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
