export class Classroom implements IClassroom {
    id: number
    name: string
    createdAt: number
    updatedAt: number


    constructor(id: number, name: string, createdAt: number, updatedAt: number) {
        this.id = id
        this.name = name
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    public toString = (): string => {
        return(this.name)
    }

}
