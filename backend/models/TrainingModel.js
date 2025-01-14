import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Training = db.define('training', {
    department: DataTypes.STRING,
    training: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    mentor: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Training;

(async () => {
    await db.sync();
})();
