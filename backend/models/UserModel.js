import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Karyawan = sequelize.define(
    "Karyawan",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_karyawan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status_karyawan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      posisi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email_karyawan: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      tableName: "karyawan", // Nama tabel di database
      timestamps: true, // Untuk createdAt dan updatedAt
    }
  );

export default Karyawan;

(async()=>{
    await db.sync();
})();