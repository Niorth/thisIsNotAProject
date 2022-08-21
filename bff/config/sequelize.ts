import {Sequelize} from "sequelize";

export const sequelize = new Sequelize('thisIsNotAProjectDB', 'Hugo', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});
