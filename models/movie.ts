export class Movie {
    private _id_movie: number
    private _duration: number
    private _name: string

    constructor(id_movie: number, duration: number, name: string) {
        this._id_movie = id_movie
        this._duration = duration
        this._name = name
    }

    public toString = (): string => {
        return(this._id_movie + " " + this.name + " " + this.duration +"h")
    }



    get id_movie(): number {
        return this._id_movie;
    }

    set id_movie(value: number) {
        this._id_movie = value;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}
