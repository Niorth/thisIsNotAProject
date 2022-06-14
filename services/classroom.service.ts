import {Request, Response} from 'express';
import {ClassroomRepository} from "../repositories/classroom.repository";
import {Classroom} from "../models/classroom";

const repository = new ClassroomRepository();

export class ClassroomService {
    async getAllClassroom(): Promise<Classroom[]> {
        try {
            const result = await repository.findAll()
            const classrooms: Classroom[] = result
            return classrooms
        } catch (e) {
            throw e
        }
    };

    async newClassroom(classroom: Classroom) {
        try {
            return await repository.create(classroom)
        } catch (e) {
            throw e
        }
    };

    async deleteAllUser(req: Request, res: Response, id: string) {
        res.json({message: "DELETE all user"});
    };

    async getOneClassroom(id: string): Promise<Classroom> {
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

