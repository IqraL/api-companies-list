import { Request, Response } from "express";

export { Response };

export type FilterSecCodesRequest = Request<
  {},
  {},
  { sic_codes: string[] },
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
