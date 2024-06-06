import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Nodejs back-end");
});

app.get("/test", (req, res) => {
  return res.json({ message: "router is working" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
