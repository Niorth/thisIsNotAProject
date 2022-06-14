import {BaseRepository} from "./base/BaseRepository";
import {pool} from "../config/db";
import {User} from "../models/user";


export class UserRepository extends BaseRepository<User>{
    private readonly insertQuery = 'INSERT INTO "user" (firstname, lastname, gender, "isTeacher", "isStudent")VALUES ($1, $2, $3, $4, $5)'
    constructor() {
        super("user");
    }

    async create(item: User): Promise<boolean> {
        const result = await pool.query(
            this.insertQuery,
            [item.firstname, item.lastname, item.gender, item.isTeacher, item.isStudent]
        )
        return !!result
    }

}
