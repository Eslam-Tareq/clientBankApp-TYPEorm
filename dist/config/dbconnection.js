"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresConnection = void 0;
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "ESl33665599",
    database: "typeorm",
    entities: ["src/entities/**.ts"],
    synchronize: true,
    logging: false,
});
const postgresConnection = () => {
    try {
        AppDataSource.initialize().then((c) => {
            console.log("Connected to Postgres database.");
        });
    }
    catch (err) {
        console.error("Error connecting to Postgres database:", err);
        process.exit(1);
    }
};
exports.postgresConnection = postgresConnection;
//# sourceMappingURL=dbconnection.js.map