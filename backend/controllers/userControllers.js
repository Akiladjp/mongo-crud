import userModels from "../models/userModels.js";

export const addUser = async (req, res) => {
  try {
    const { mobile, name, birth, gender, blood, weight } = req.body;
    const user = await userModels.findOne({ mobile });

    if (user) {
      user.donationCount += 1;
      await user.save();

      console.log("User updated successfully");
      return res
        .status(200)
        .json({ message: "User updated successfully", success: true, user });
    }

    const newUser = new userModels({
      mobile,
      name,
      birth,
      gender,
      blood,
      weight,
      donationCount: 1,
    });

    await newUser.save();

    console.log(newUser);

    console.log("User created successfully");
    res.status(201).json({
      message: "User added successfully",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding user",
      success: false,
      error: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  const { mobile } = req.body;

  try {
    const user = await userModels.findOne({ mobile });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not registered" });
    }

    res.status(200).json({ user, success: true, message: "User find" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error in get user" });
  }
};

export const deleteUser = async (req, res) => {
  const { mobile } = req.body;

  try {
    const user = await userModels.findOne({ mobile });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not registers" });
    }

    await userModels.deleteOne({ mobile });
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "error in user delete" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModels.find();

    if (users.length === 0) {
      return res
        .status(404)
        .json({ message: "No users available", success: false });
    }

    return res
      .status(200)
      .json({ users, success: true, message: "Users successfully fetch" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error in get all users", success: false });
  }
};
