import {DataTypes, Model} from "sequelize";
import {sequelize} from "../../config/sequelize";

export class ClassroomSequelize extends Model implements IClassroom {
    declare id: number
    declare name: string;
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
    tableName: 'classroom'
});
