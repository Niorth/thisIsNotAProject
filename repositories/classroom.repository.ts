import {BaseRepository} from "./base/BaseRepository";
import {pool} from "../config/db";
import {User} from "../models/user";
import {Classroom} from "../models/classroom";


export class ClassroomRepository extends BaseRepository<Classroom>{
    private readonly insertQuery = 'INSERT INTO "classroom" (name) VALUES ($1)'
    constructor() {
        super("classroom");
    }

    async create(item: Classroom): Promise<boolean> {
        const result = await pool.query(
            this.insertQuery,
            [item.name]
        )
        return !!result
    }

}
