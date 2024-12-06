import { postgresConnection } from "./config/dbconnection";
postgresConnection();
import app from "./app";
app.listen(8010, () => {
  console.log("app is running on port 8010");
});
