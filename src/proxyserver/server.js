import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const response = await fetch("http://68.183.108.138:3000/api/projects/", {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRubEJvdCIsImlhdCI6MTY5NDU0NTE0M30.-1kktNej16aURKwdXa1K-4-zwC9b_t0EkAmEewJFF5c",
    },
  });
  res.json(await response.json());
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
