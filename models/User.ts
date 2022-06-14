export class User implements IUser {
    id: number
    firstname: string;
    gender: string;
    isStudent: boolean;
    isTeacher: boolean;
    lastname: string;
    createdAt: Date
    updatedAt: Date


    constructor(id: number, firstname: string, lastname: string, gender: string, isTeacher: boolean, isStudent: boolean, createdAt: Date, updatedAt: Date) {
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.gender = gender
        this.isTeacher = isTeacher
        this.isStudent = isStudent
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    public toString = (): string => {
        return(this.firstname + " " + this.lastname)
    }



}
