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
  {
    sic_codes: string[];
    sort: SortType;
    sortDirection: -1 | 1;
    page: number;
    pageSize: number;
    isActive: boolean;
    isDissolved: boolean;
  },
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
