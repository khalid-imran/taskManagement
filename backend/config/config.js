require("dotenv").config();

const dev = {
    app: {
        port: process.env.PORT || 4000,
    },
    db: {
        url: process.env.DB_URI || "mongodb+srv://ekhalid090:7vIw5v6jUAl0NTZb@taskmanagement.rwlvbmt.mongodb.net/?retryWrites=true&w=majority",
    },
};

module.exports = dev;