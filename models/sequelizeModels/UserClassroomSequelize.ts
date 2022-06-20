import {DataTypes, Model} from "sequelize";
import {sequelize} from "../../config/sequelize";
import {UserSequelize} from "./UserSequelize";
import {ClassroomSequelize} from "./ClassroomSequelize";

export class UserClassroomSequelize extends Model {
    declare isActive: boolean
}

UserClassroomSequelize.init({
    // Model attributes are defined here
    idUser: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    idClassroom: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    isActive: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'UserClassroom',
    tableName: 'user_classroom',
    createdAt: false,
    updatedAt: false,
});

UserClassroomSequelize.belongsTo(UserSequelize, {
    foreignKey: "idUser"
})

UserClassroomSequelize.belongsTo(ClassroomSequelize, {
    foreignKey: "idClassroom"
})
