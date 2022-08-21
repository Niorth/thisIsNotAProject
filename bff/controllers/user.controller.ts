import express, {Request, Response} from 'express';
import {User} from "../models/User";
import {UserService} from "../services/user.service";

export class UserController {
    public path = '/user';
    public router = express.Router();
    private userService: UserService


    constructor() {
        this.intializeRoutes();
        this.userService = new UserService()
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllUsers.bind(this));
        this.router.get(this.path + "/:id", this.getUserById.bind(this));
        this.router.delete(this.path + "/:id", this.deleteUser.bind(this));
        this.router.post(this.path, this.createUser.bind(this));
        this.router.put(this.path, this.updateUser.bind(this));
        this.router.post(this.path + "/addUserToClassroom", this.addUserToClassroom.bind(this));
    }

    public async getAllUsers(req: Request, res: Response) {
        this.userService.getAllUser()
            .then((users: User[]) =>  {
                res.status(200).json(users)
            })
            .catch((e: Error) => {
                res.status(500).send({
                    message: e
                });
                console.error(e)
            })
    }

    public async getUserById(req: Request, res: Response) {
        this.userService.getOneUser(req.params.id)
            .then((user: User) =>  {
                res.status(200).json(user)
            })
            .catch((e: Error) => {
                res.status(500).send({
                    message: e
                });
                console.error(e)
            })
    }

    public async createUser(req: Request, res: Response) {
        this.userService.newUser(req.body)
            .then(() =>  {
                res.status(200).json()
            })
            .catch((e: Error) => {
                res.status(500).send({
                    message: e
                });
                console.error(e)
            })
    }

    public async updateUser(req: Request, res: Response) {
        this.userService.updateUser(req.body.id, req.body)
            .then(() =>  {
                res.status(200).json()
            })
            .catch((e: Error) => {
                res.status(500).send({
                    message: e
                });
                console.error(e)
            })
    }

    public async deleteUser(req: Request, res: Response) {
        this.userService.deleteOneUser(req.params.id)
            .then((result: number) =>  {
                res.status(200).json(result)
            })
            .catch((e: Error) => {
                res.status(500).send({
                    message: e
                });
                console.error(e)
            })
    }

    public async addUserToClassroom(req: Request, res: Response) {
        const body: {idUser: bigint, idClassroom: bigint} = req.body
        this.userService.addUserToClassroom(body)
            .then(() =>  {
                res.status(200).json()
            })
            .catch((e: Error) => {
                res.status(500).send({
                    message: e
                });
                console.error(e)
            })
    }
}





