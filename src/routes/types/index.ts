import { Request, Response } from "express";

export { Response };
type SortType =
  | "companyName"
  | "companyNumber"
  | "company_status"
  | "numberOfEmployees"
  | "sic_codes";

export type FilterSecCodesRequest = Request<
  {},
  {},
  { sic_codes: string[]; sort: SortType; sortDirection: -1 | 1 },
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
