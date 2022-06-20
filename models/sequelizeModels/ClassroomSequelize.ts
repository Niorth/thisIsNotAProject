import {DataTypes, Model, Optional} from "sequelize";
import {sequelize} from "../../config/sequelize";
import {Classroom} from "../Classroom";

export class ClassroomSequelize extends Model implements IClassroom {
    declare id: bigint
    declare name: string;

    constructor(...args: any) {
        super(...args);
    }
}

ClassroomSequelize.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Classroom',
    tableName: 'classroom',
});
