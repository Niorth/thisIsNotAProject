export class User implements IUser {

    id: number | null
    firstname: string;
    gender: string;
    isStudent: boolean;
    isTeacher: boolean;
    lastname: string;
    email: string;
    birthday: Date;
    createdAt: Date | null
    updatedAt: Date | null




    constructor(firstname: string,
                lastname: string,
                gender: string,
                isTeacher: boolean,
                isStudent: boolean,
                email: string,
                birthday: Date,
                createdAt: Date | null,
                updatedAt: Date | null
    ) {
        this.id = null
        this.firstname = firstname
        this.lastname = lastname
        this.gender = gender
        this.isTeacher = isTeacher
        this.isStudent = isStudent
        this.email = email
        this.birthday = birthday
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    public toString = (): string => {
        return(this.firstname + " " + this.lastname)
    }



}
