import express, { Request } from "express";
import { MongoDbClient } from "../mongodb";
import { FilterSecCodesRequest } from "./types";
import { filterSecCodes } from "./logic";
const searchBySicCodeRouter = express.Router();

searchBySicCodeRouter.post(
  "/filter_sec_codes",
  async (req: FilterSecCodesRequest, res) => {
    await filterSecCodes(req, res);
  }
);

export { searchBySicCodeRouter };
