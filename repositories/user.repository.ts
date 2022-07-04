import {BaseRepository} from "./base/BaseRepository";
import {User} from "../models/User";
import {UserClassroomSequelize} from "../models/sequelizeModels/UserClassroomSequelize";
import {UserSequelize} from "../models/sequelizeModels/UserSequelize";


export class UserRepository extends BaseRepository<User>{
    constructor() {
        super("user");
    }

    async addUserToClassroom(idUser: bigint, idClassroom: bigint) {
        return await UserClassroomSequelize.create({idUser: idUser, idClassroom: idClassroom, isActive: true})
    }

    async findOneByEmail(email: string): Promise<IUser | null> {
        return await UserSequelize.findOne({
            where: {
                email: email
            }
        })
    }
}
