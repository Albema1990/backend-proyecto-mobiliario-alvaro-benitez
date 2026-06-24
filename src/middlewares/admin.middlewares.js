import User from "../models/User.js";

export const adminMiddleware = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user || user.role !== "admin") {
            return res.status(403).json({message: "Acceso denegado"});
        }

        next();
        
    } catch (error) {
        res.status(500).json({message: "Error del servidor"});
    }
};