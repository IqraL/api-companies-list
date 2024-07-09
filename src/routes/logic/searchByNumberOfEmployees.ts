import {Response} from "express";
import { MongoDbClient } from "../../mongodb";
import { FilterByNumberOfEmployees } from "../types";

export const filterByNoOfEmployees = async (
  req: FilterByNumberOfEmployees,
  res: Response
) => {
  try {
    const client = await MongoDbClient.getClient();
    const cursor = await client
      .db("companies-db")
      .collection("information")
      .find({
        numberOfEmployees: {
          $gte: req.body.greaterThenNoOfEmployees,
          $lte: req.body.lessThenNoOfEmployees,
        },
      });

    res.setHeader("Content-Type", "application/json");
    res.write("["); // Start the JSON array

    let first = true;
    for await (const doc of cursor) {
      if (!first) {
        res.write(","); // Add a comma between documents
      }
      first = false;
      res.write(JSON.stringify(doc)); // Write the document as a JSON string
    }

    res.write("]"); // End the JSON array
    res.end();
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
