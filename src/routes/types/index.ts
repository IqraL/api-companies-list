import { Request, Response } from "express";

export { Response };
type SortType =
  | "companyName"
  | "companyNumber"
  | "CompanyStatus"
  | "NumberOfEmployees"
  | "Industry"
  | "";
export type FilterSecCodesRequest = Request<
  {},
  {},
  { sic_codes: string[]; sort: SortType },
  {},
  {}
>;

export type FilterByNumberOfEmployees = Request<
  {},
  {},
  { greaterThenNoOfEmployees: number; lessThenNoOfEmployees: number },
  {},
  {}
>;
