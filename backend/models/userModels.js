import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
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
        match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number'],
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
        required: true,
        default: 0,
    },
});

export default mongoose.model('bloodDonation', userSchema);
