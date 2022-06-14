import {DataTypes, Model} from "sequelize";
import {sequelize} from "../../config/sequelize";

export class UserSequelize extends Model implements IUser {
    declare id: number
    declare firstname: string;
    declare gender: string;
    declare isStudent: boolean;
    declare isTeacher: boolean;
    declare lastname: string;
}

UserSequelize.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    },
    isTeacher: {
        type: DataTypes.BOOLEAN
    },
    isStudent: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    tableName: 'user',
});
