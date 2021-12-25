import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database_ignite";
  createConnection({
    ...options,
  }).then((connection) =>
    connection.runMigrations().then(() => console.log("Migrations rodando! 🚀"))
  );
});
