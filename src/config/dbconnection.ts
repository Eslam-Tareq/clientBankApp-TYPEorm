import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "postgres",
  database: "typeorm",
  entities: ["src/entities/**.ts"], // Add your entity classes here
  synchronize: true, // Set to false in production
  logging: false, // Enable if you want detailed query logs
});
export const postgresConnection = () => {
  try {
    AppDataSource.initialize().then((c) => {
      console.log("Connected to Postgres database.");
    });
  } catch (err) {
    console.error("Error connecting to Postgres database:", err);
    process.exit(1);
  }
};
