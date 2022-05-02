// Connect Mongoose
const mongoose = require("mongoose");

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
});
     console.log(`MONGODB холбогдолоо : ${conn.connection.host}`)
};

module.exports = connectDB;