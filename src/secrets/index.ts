import "dotenv/config";
require("dotenv").config();

const MONGO_DB_URI = `mongodb+srv://iqra:${process.env.db_password}@companies-list-severles.fze0gqd.mongodb.net/?retryWrites=true&w=majority&appName=companies-list-severless-db`;

export { MONGO_DB_URI };
