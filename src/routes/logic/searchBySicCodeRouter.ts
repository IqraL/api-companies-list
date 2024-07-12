import { MongoDbClient } from "../../mongodb";
import { FilterSecCodesRequest, Response } from "../types";

export const filterSecCodes = async (
  req: FilterSecCodesRequest,
  res: Response
) => {
  try {
    const page = req.body.page || 1;
    const pageSize = req.body.pageSize || 25;

    const client = await MongoDbClient.getClient();
    const cursor = await client
      .db("companies-db")
      .collection("information")
      .find({ sic_codes: { $in: req.body.sic_codes } })
      .sort({
        [req.body.sort || "companyName"]: req.body.sortDirection || 1,
        _id: 1,
      })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    const results = await cursor.toArray();

    const totalCount = await client
      .db("companies-db")
      .collection("information")
      .countDocuments({ sic_codes: { $in: req.body.sic_codes } });

    res.send({
      page,
      pageSize,
      maxPage: Math.floor(totalCount / pageSize + 1),
      totalCount,
      results,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
