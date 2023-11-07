const express = require("express");
const path = require("path");
const color = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", require("./routes/todoRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../view/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./", "view", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server started on port: ${port}`);
});
