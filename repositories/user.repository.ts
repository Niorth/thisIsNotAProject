import {BaseRepository} from "./base/BaseRepository";
import {User} from "../models/User";
import {UserClassroomSequelize} from "../models/sequelizeModels/UserClassroomSequelize";


export class UserRepository extends BaseRepository<User>{
    constructor() {
        super("user");
    }

    async addUserToClassroom(idUser: bigint, idClassroom: bigint) {
        return await UserClassroomSequelize.create({idUser: idUser, idClassroom: idClassroom, isActive: true})
    }
}
