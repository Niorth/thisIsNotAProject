const Pool = require("pg").Pool

export const pool = new Pool({
    user: "Hugo",
    password: "admin",
    database: "thisIsNotAProjectDB",
    host: "localhost",
    port: "5432"
})
