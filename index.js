const express = require("express");
const app = express();
const mainroute = require("./routes/mainroute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("", mainroute)

// Start the server
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});