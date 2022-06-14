import {BaseRepository} from "./base/BaseRepository";
import {pool} from "../config/db";
import {User} from "../models/User";
import {Classroom} from "../models/Classroom";


export class ClassroomRepository extends BaseRepository<Classroom>{
    constructor() {
        super("classroom");
    }
}
