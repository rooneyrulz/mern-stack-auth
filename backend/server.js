const express = require("express");
const dotenv = require("dotenv");
require("colors");

const app = express();

dotenv.config({ path: "./config.env" });

app.listen(process.env.PORT | 5000, () =>
  console.log(
    `app started on ${process.env.NODE_ENV} port ${process.env.PORT}!`.blue
      .bold
  )
);
