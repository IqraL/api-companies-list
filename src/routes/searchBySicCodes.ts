import express from "express";
const searchBySicCodeRouter = express.Router();

searchBySicCodeRouter.post("/sic_codes_search", (req, res) => {
  res.send("sic_codes_search");
});

export { searchBySicCodeRouter };
