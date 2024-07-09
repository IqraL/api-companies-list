import express, { Request } from "express";
import { MongoDbClient } from "../mongodb";
import { FilterByNumberOfEmployees, FilterSecCodesRequest } from "./types";
import { filterSecCodes, filterByNoOfEmployees } from "./logic";
const searchBy = express.Router();

searchBy.post("/filter_sec_codes", async (req: FilterSecCodesRequest, res) => {
  await filterSecCodes(req, res);
});

searchBy.post(
  "/filter_no_employees",
  async (req: FilterByNumberOfEmployees, res) => {
    await filterByNoOfEmployees(req, res);
  }
);

export { searchBy };
