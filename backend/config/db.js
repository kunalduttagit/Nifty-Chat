const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
    } catch (error) {
        console.log(`Error: (Maybe internet not connected) ${error.message}`.red.underline);
        process.exit();
    }
}

module.exports = connectDB;