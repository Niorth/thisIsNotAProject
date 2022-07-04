import {pool} from "./db";

const session = require('express-session')
const pgSession = require('connect-pg-simple')(session)

export const sessionConfig = {
    store: new pgSession({
        pool: pool,
        tableName: 'session'
    }),
    saveUninitialized: false,
    secret: "SECRET_TODO",
    resave: false,
}
