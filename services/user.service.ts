import {Request} from 'express';
import {User} from "../models/User";
import {UserRepository} from "../repositories/user.repository";


const repository = new UserRepository();

//GET '/user'
export class UserService {
    async getAllUser(): Promise<User[]> {
        try {
            return await repository.findAll()
        } catch (e) {
            throw e
        }
    };

//POST '/user'
    async newUser(user: User) {
        try {
            return await repository.create(user)
        } catch (e) {
            throw e
        }
    };

    async getOneUser(id: string): Promise<User> {
        try {
            return await repository.findOne(id)
        } catch (e) {
            throw e
        }
    };

    async deleteOneUser(id: string) {
        try {
            return await repository.delete(id)
        } catch (e) {
            throw e
        }
    };

    async updateUser(id: string, user: User) {
        try {
            return await repository.update(id, user)
        } catch (e) {
            throw e
        }
    };

    async addUserToClassroom(body: { idUser: bigint; idClassroom: bigint }) {
        try {
            return await repository.addUserToClassroom(body.idUser, body.idClassroom)
        } catch (e) {
            throw e
        }
    }
}

