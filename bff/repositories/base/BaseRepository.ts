import {IWrite} from "./IWrite";
import {IRead} from "./IRead";
import {ClassroomSequelize} from "../../models/sequelizeModels/ClassroomSequelize";
import {UserSequelize} from "../../models/sequelizeModels/UserSequelize";

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    private model: any

    constructor(collectionName: string) {
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
        this.create = this.create.bind(this)
        this.delete = this.delete.bind(this)
        this.findAll = this.findAll.bind(this)
    }

    async create(item: T): Promise<T> {
        return this.model.create(item)
    }

    update(id: string, item: T): Promise<boolean> {
        return this.model.update({...item, updatedAt: Date.now()}, {
            where: {
                id: id
            }
        });

    }
    delete(id: string): Promise<number> {
        return this.model.destroy({
            where: {
                id: id
            }
        })
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
}
