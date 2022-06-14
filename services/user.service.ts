import {Request, Response} from 'express';
import {User} from "../models/user";
import {UserRepository} from "../repositories/user.repository";

const pool = require("../config/db")

const repository = new UserRepository();

//GET '/user'
export class UserService {
    async getAllUser(): Promise<User[]> {
        try {
            const result = await repository.findAll()
            const users: User[] = result
            return users
        } catch (e) {
            throw e
        }
    };

//POST '/user'
    async newUser(user: User) {
        try {
            const result: boolean = await repository.create(user)
            return result
        } catch (e) {
            throw e
        }
    };

//DELETE '/user'
    async deleteAllUser(req: Request, res: Response, id: string) {
        res.json({message: "DELETE all user"});
    };

//GET '/user/:name'
    async getOneUser(id: string): Promise<User> {
        try {
            return await repository.findOne(id)
        } catch (e) {
            throw e
        }
    };

//POST '/user/:name'
    newComment(req: Request, res: { json: (arg0: { message: string; }) => void; }, next: any) {
        res.json({message: "POST 1 user comment"});
    };

//DELETE '/user/:name'
    deleteOneUser(req: Request, res: { json: (arg0: { message: string; }) => void; }, next: any)  {
        res.json({message: "DELETE 1 user"});
    };

}

