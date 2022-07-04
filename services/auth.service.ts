import {Profile} from "passport";
import {UserRepository} from "../repositories/user.repository";
import {ClassroomRepository} from "../repositories/classroom.repository";
import {Classroom} from "../models/Classroom";

const userRpository = new UserRepository();
const classroomRpository = new ClassroomRepository();

export class AuthService {
    async fetchGoogleUser(issuer: string, profile: Profile, cb: any) {
    await classroomRpository.create(new Classroom(10, "a", Date.now(), Date.now()))};
}

