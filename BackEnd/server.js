const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { handleError } = require("./middlewares/errorMiddleware");
const port = process.env.PORT;
const connectDatabase = require("./config/db.js");

connectDatabase();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

app.use(handleError);

app.listen(port, () => console.log(`Server started on port ${port}`));
