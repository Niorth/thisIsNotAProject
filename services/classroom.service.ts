import {ClassroomRepository} from "../repositories/classroom.repository";
import {Classroom} from "../models/Classroom";

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

    async getOneClassroom(id: string): Promise<Classroom> {
        try {
            return await repository.findOne(id)
        } catch (e) {
            throw e
        }
    };

    async deleteOneClassroom(id: string) {
        try {
            return await repository.delete(id)
        } catch (e) {
            throw e
        }
    }

    async updateClassroom(id: string, classroom: Classroom) {
        try {
            return await repository.update(id, classroom)
        } catch (e) {
            throw e
        }
    }

}

