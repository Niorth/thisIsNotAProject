import express, {Request, Response} from 'express';
import {User} from "../models/user";
import {UserService} from "../services/user.service";
import {ClassroomService} from "../services/classroom.service";
import {Classroom} from "../models/classroom";

export class ClassroomController {
    public path = '/classroom';
    public router = express.Router();
    private classroomService: ClassroomService


    constructor() {
        this.intializeRoutes();
        this.classroomService = new ClassroomService()
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllClassroom.bind(this));
        this.router.get(this.path + "/:id", this.getClassroomById.bind(this));
        this.router.post(this.path, this.createClassroom.bind(this));
    }

    public async getAllClassroom(req: Request, res: Response) {
        this.classroomService.getAllClassroom()
            .then((classrooms: Classroom[]) =>  {
                res.status(200).json(classrooms)
            })
            .catch((e: Error) => {
                res.status(500).send({
                    message: e
                });
                console.error(e)
            })
    }

    public async getClassroomById(req: Request, res: Response) {
        this.classroomService.getOneClassroom(req.params.id)
            .then((classroom: Classroom) =>  {
                res.status(200).json(classroom)
            })
            .catch((e: Error) => {
                res.status(500).send({
                    message: e
                });
                console.error(e)
            })
    }

    public async createClassroom(req: Request, res: Response) {
        this.classroomService.newClassroom(req.body)
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





