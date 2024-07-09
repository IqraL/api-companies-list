import express, { Request } from "express";
import cors from "cors";
import { sic_codes } from "./assets/sic_codes";
import { searchBy } from "./routes";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/sic_codes", (req, res) => {
  res.send(sic_codes);
});

app.use(searchBy);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
