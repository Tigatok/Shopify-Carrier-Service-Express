import express, { Express } from "express";
import ratesRouter from './routes/rates'

const app: Express = express();
const port = 3000;

// This enables the express app to parse JSON formatted request bodies.
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/rates", ratesRouter);

app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}
  `)
)
