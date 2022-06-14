export class Classroom implements IClassroom {
    id: number
    name: string;


    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    public toString = (): string => {
        return(this.name)
    }

}
