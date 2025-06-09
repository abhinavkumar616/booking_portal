const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    }
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })

module.exports = mongoose.model("Booking", bookingSchema)

