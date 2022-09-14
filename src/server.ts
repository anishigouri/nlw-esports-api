import express from "express";

const app = express();

app.get("/ads", (request: any, response: any) => {
  response.json({ name: 2 });
});

app.listen(3333);
