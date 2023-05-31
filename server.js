const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", require("./routes/todoRoutes"));

app.use(errorHandler);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server started on port: ${port}`);
});
