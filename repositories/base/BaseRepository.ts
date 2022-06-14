import {IWrite} from "./IWrite";
import {IRead} from "./IRead";
import {ClassroomSequelize} from "../../models/sequelizeModels/ClassroomSequelize";
import {UserSequelize} from "../../models/sequelizeModels/UserSequelize";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    public readonly _collection: string;
    private readonly model: any

    constructor(collectionName: string) {
        this._collection = collectionName;
        switch (collectionName) {
            case "classroom":
                this.model = ClassroomSequelize
                break
            case "user":
                this.model = UserSequelize
                break
            default:
                throw new Error("unknown collection name " + collectionName)
        }
        this.findOne = this.findOne.bind(this)
    }

    create(item: T): Promise<boolean> {
        return this.model.create(item)
    }

    update(id: string, item: T): Promise<boolean> {
        throw new Error("Method not implemented.");

    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async findAll(): Promise<T[]> {
        return await this.model.findAll()
    }

    async findOne(id: string): Promise<T> {
        return this.model.findAll({
            where: {
                id: id
            }
        });
    }

    find(item: T): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
}
