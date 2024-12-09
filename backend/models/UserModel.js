import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Karyawan = db.define('karyawan',{
    status_karyawan: DataTypes.STRING,
    nama_karyawan: DataTypes.STRING,
    email_karyawan: DataTypes.STRING,
    posisi: DataTypes.STRING
},{
    freezeTableName: true
});

export default Karyawan;

(async()=>{
    await db.sync();
})();