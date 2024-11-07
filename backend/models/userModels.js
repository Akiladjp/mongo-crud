import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    birth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    blood: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    donationCount: {
        type: Number,
        required: false,
    },
});

export default mongoose.model("donations", userSchema);
