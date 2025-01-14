import Training from "../models/TrainingModel.js";

export const addTraining = async (req, res) => {
    try {
        const { department, training, date, mentor } = req.body;
        const newTraining = await Training.create({
            department, 
            training, 
            date, 
            mentor
        });
        res.status(201).json(newTraining);
    } catch (error) {
        console.error('Error adding training:', error.message);
        res.status(500).json({ message: error.message });
    }
};

export const updateTraining = async (req, res) => {
    try {
        await Training.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ message: "Training updated successfully!" });
    } catch (error) {
        console.error('Error updating training:', error.message);
        res.status(500).json({ message: error.message });
    }
};

export const deleteTraining = async (req, res) => {
    try {
        await Training.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ message: "Training deleted successfully!" });
    } catch (error) {
        console.error('Error deleting training:', error.message);
        res.status(500).json({ message: error.message });
    }
};

