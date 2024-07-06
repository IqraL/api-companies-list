import { Request, Response } from "express";

export { Response };

export type FilterSecCodesRequest = Request<
  {},
  {},
  { sic_codes: string[] },
  {},
  {}
>;
