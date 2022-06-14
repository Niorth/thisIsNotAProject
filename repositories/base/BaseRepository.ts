import {IWrite} from "./IWrite";
import {IRead} from "./IRead";
import {pool} from "../../config/db"

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    public readonly _collection: string;
    private readonly findOneQuery = 'SELECT * FROM "$table_name" WHERE id = $1'

    //we created constructor with arguments to manipulate mongodb operations
    constructor(collectionName: string) {
        this._collection = collectionName;
        this.findOne = this.findOne.bind(this)
    }

    abstract create(item: T): Promise<boolean>

    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");

    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async findAll(): Promise<T[]> {
        const result = await pool.query(
            'SELECT * FROM ' + '"' + this._collection + '"'
        )
        return result.rows
    }

    async findOne(id: string): Promise<T> {
        const result = await pool.query(
            this.findOneQuery.replace("$table_name", this._collection),
            [id]
        )
        return result.rows[0]
    }

    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
}
