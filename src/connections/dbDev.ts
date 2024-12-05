import { DataSource } from "typeorm";
import { Task } from "../models/task";

//Local Environment - Ambiente local
export const DevDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "backend",
    entities: [Task]
})

// // Production Environment - AMBIENTE PRODUÇÃO
