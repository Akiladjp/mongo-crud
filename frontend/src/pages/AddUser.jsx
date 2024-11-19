import React, { useState } from "react";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [blood, setBlood] = useState("");
  const [weight, setWeight] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, birth, gender, mobile, blood, weight });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-md mt-12 pb-16">
      <h1 className="flex justify-center text-xl font-semibold uppercase mb-6 pt-12">
        Add New User
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Birthday</label>
          <input
            type="date"
            name="birthday"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mobile Number</label>
          <input
            type="number"
            name="mobileNumber"
            placeholder="Enter mobile number"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Blood Group</label>
          <select
            name="bloodGroup"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            value={blood}
            onChange={(e) => setBlood(e.target.value)}
          >
            <option value="">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Weight</label>
          <input
            type="number"
            name="weight"
            placeholder="Enter weight in kg"
            className={`w-full mt-1 p-2 border border-gray-300 rounded-md`}
            value={weight}
            min="0"
            onChange={(e) => {
              const values = e.target.value;
              setWeight(values < 0 ? 0 : values);
            }}
          />
        </div>
        <div className="flex justify-center mt-12">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
