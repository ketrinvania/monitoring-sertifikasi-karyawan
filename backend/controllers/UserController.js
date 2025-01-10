import Karyawan from "../models/UserModel.js";

// Mendapatkan semua data user
export const getUsers = async (req, res) => {
  try {
    const response = await Karyawan.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Terjadi Kesalahan pada sistem." });
  }
};

// Menambahkan user baru
export const addUsers = async (req, res) => {
  try {
    const { id, name, status, role, email, active } = req.body;

    // Validasi input
    if (!id || !name || !status || !role || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Menambahkan user baru ke database
    const newUser = await Karyawan.create({
      id: id,
      nama_karyawan: name,
      status_karyawan: status,
      posisi: role,
      email_karyawan: email,
    });

    res.status(200).json({ message: "User created successfully", data: newUser });
  } catch (error) {
    console.error("Error adding user:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
