import {Sequelize} from "sequelize";

const db = new Sequelize('monitoring_db', 'root', '1234', {
    host: '127.0.0.1',
    dialect: 'mysql'
});


export default db;