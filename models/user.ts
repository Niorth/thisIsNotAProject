export class User implements IUser {
    id: number
    firstname: string;
    gender: string;
    isStudent: boolean;
    isTeacher: boolean;
    lastname: string;


    constructor(id: number, firstname: string, lastname: string, gender: string, isTeacher: boolean, isStudent: boolean) {
        this.id = id
        this.firstname = firstname
        this.lastname = lastname
        this.gender = gender
        this.isTeacher = isTeacher
        this.isStudent = isStudent
    }

    public toString = (): string => {
        return(this.firstname + " " + this.lastname)
    }

}
