const express = require("express");
const bodyParser = require("body-parser");
const characterCountRoutes = require("./src/routes/characterCountRoutes");
const randomNumberRoutes = require("./src/routes/randomNumberRoutes");
const profileGeneratorRoutes = require("./src/routes/profileGeneratorRoutes");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/count-character-in-string", characterCountRoutes);
app.use("/random-number", randomNumberRoutes);
app.use("/generate-profile", profileGeneratorRoutes);

// Error Handle
app.use((_req, _res, next) => {
  const error = new Error("404 not found");
  error.status = 404;
  next(error);
});

app.use((error, _req, res, _next) => {
  console.log("Error", error);

  if (error.status) return res.json({ status: error.status, msg: error.message });

  res.status(500).send("<h1>Something went wrong</h1>");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
