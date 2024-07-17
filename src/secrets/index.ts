import dotenv from "dotenv";
dotenv.config();

const MONGO_DB_URI = `mongodb+srv://iqra:159236478@companies-list-severles.fze0gqd.mongodb.net/?retryWrites=true&w=majority&appName=companies-list-severless-db`;
console.log("db_password", process.env.db_password);
export { MONGO_DB_URI };
