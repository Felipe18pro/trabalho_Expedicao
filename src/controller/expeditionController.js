import Expedition from "../model/expeditionModel.js";

export const store = async (req, res) => {
    try {
        const expedition = await Expedition.create(req.body)
        return res.status(201).json(expedition);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const expedition = await Expedition.find().exec();
        return res.status(200).json(expedition);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const expedition = await Expedition.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(expedition);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const expedition = await Expedition.findByIdAndDelete(req.params.id).exec();
        return res.status(200).json(expedition);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

	