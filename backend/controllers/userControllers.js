import userModels from "../models/userModels.js";

export const addUser = async (req, res) => {
    try {
        const { mobile, name, birth, gender, blood, weight } = req.body;  // Add other fields if needed
        const user = await userModels.findOne({ mobile });

        console.log('first', user);
        
        if (user) {
            console.log("User already exists");
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new userModels({
            mobile,
            name,
            birth,
            gender,
            blood,
            weight,
        });

        await newUser.save();

        console.log("User created successfully");
        res.status(201).json({ message: "User added successfully", success: true, user: newUser });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error adding user", success: false, error: error.message });
    }
};
