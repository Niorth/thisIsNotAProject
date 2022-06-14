import express, {Request, Response} from 'express';
import {User} from "../models/user";
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
        this.router.post(this.path, this.createUser.bind(this));
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
}





