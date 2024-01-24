import express, { Request, Response } from "express";

export const app: express.Application = express();

app.use(express.json());

app.post("/getLowestTemperature", (req: Request, res: Response) => {
  const response = "Hello World!";

  res.json({
    response,
  });
});

// The server is listening on port 3000
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
