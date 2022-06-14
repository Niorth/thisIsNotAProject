export class Classroom implements IClassroom {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date


    constructor(id: number, name: string, createdAt: Date, updatedAt: Date) {
        this.id = id
        this.name = name
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    public toString = (): string => {
        return(this.name)
    }

}
