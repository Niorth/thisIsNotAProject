import express, { Express } from 'express';
import dotenv from 'dotenv';
import { Liquibase, LiquibaseConfig, LiquibaseLogLevels, POSTGRESQL_DEFAULT_CONFIG, UpdateCommandAttributes } from 'liquibase';
import {UserController} from "./controllers/user.controller";
import {ClassroomController} from "./controllers/classroom.controller";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const pool = require("./config/db")

const userController = new UserController()
const classroomController = new ClassroomController()
app.use(express.json());

app.use('/', [userController.router, classroomController.router]);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

const myConfig: LiquibaseConfig = {
    ...POSTGRESQL_DEFAULT_CONFIG,
    changeLogFile: './util/changelog/changelog-master.xml',
    url: 'jdbc:postgresql://localhost:5432/thisIsNotAProjectDB',
    username: 'Hugo',
    password: 'admin',
    liquibaseSchemaName: 'public',
    logLevel: LiquibaseLogLevels.Warning,
}
const instance = new Liquibase(myConfig);

async function doEet() {
    await instance.status();
    //await instance.dropAll();
    await instance.update({labels: undefined, contexts: undefined});
}

doEet();


