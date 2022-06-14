import {BaseRepository} from "./base/BaseRepository";
import {pool} from "../config/db";
import {User} from "../models/User";
import {UserClassroomSequelize} from "../models/sequelizeModels/UserClassroomSequelize";


export class UserRepository extends BaseRepository<User>{
    constructor() {
        super("user");
    }

    async addUserToClassroom(idUser: number, idClassroom: number) {
        return await UserClassroomSequelize.create({idUser: idUser, idClassroom, isActive: true})
    }
}
