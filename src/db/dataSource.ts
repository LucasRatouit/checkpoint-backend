import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "checkpoint.db",
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
});

export default dataSource;
