require('dotenv').config();
const mongoose = require("mongoose");

// Database connection function
const connect = (uri) => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Database connection successful.`))
        .catch(err => {
            console.error(`Error in database connection: ${err.message}`);
            process.exit(1); // Exit process on database connection failure
        });
};

// Connect to MongoDB using the URI from environment variables
connect(process.env.MONGO_URI);

module.exports = mongoose;
