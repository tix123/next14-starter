const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
        // console.log("connection.isConnected", connection.isConnected);
    } catch (error) {
        // console.log("connect to DB error", error);
        throw new Error(error);
    }
};
