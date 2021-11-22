import express from "express";
import bodyParser from "body-Parser";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  //   console.log("[TEST]!"); //show after visited this route

  res.send("Hello this is homepage!");
});

app.listen(PORT, () =>
  console.log(`Server Running on http://localhost:${PORT}`)
);
