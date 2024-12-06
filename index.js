const express = require("express");
const app = express();
const mainroute = require("./routes/mainroute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("", mainroute)

// Start the server
const port = process.env.PORT || 3000;  // Corrected the environment variable name
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});