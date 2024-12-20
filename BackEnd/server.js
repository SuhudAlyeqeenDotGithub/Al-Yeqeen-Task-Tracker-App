const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

const taskRoutes = require("./routes/taskRoutes.js")

app.use("/api/tasks", taskRoutes)


app.listen(port, () => console.log(`Server started on port ${port}`));
