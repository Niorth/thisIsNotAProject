import {BaseRepository} from "./base/BaseRepository";
import {pool} from "../config/db";
import {User} from "../models/User";


export class UserRepository extends BaseRepository<User>{
    constructor() {
        super("user");
    }
}
