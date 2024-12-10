import {Sequelize} from "sequelize";

const db = new Sequelize('monitoring_db', 'root', 'password12345', {
    host: '127.0.0.1',
    dialect: 'mysql'
});


export default db;