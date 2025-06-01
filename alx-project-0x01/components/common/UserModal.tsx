import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Handle nested fields for address and company
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value }
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value }
        }
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value }
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl overflow-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic info */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
              className="border rounded px-3 py-2"
              required
            />
            <input
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Username"
              className="border rounded px-3 py-2"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            className="border rounded px-3 py-2 w-full"
            required
          />

          {/* Address */}
          <h3 className="font-semibold">Address</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              name="address.street"
              value={user.address.street}
              onChange={handleChange}
              placeholder="Street"
              className="border rounded px-3 py-2"
              required
            />
            <input
              name="address.suite"
              value={user.address.suite}
              onChange={handleChange}
              placeholder="Suite"
              className="border rounded px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              name="address.city"
              value={user.address.city}
              onChange={handleChange}
              placeholder="City"
              className="border rounded px-3 py-2"
              required
            />
            <input
              name="address.zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
              placeholder="Zipcode"
              className="border rounded px-3 py-2"
              required
            />
          </div>

          {/* Geo */}
          <h3 className="font-semibold">Geo Location</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              name="geo.lat"
              value={user.address.geo.lat}
              onChange={handleChange}
              placeholder="Latitude"
              className="border rounded px-3 py-2"
            />
            <input
              name="geo.lng"
              value={user.address.geo.lng}
              onChange={handleChange}
              placeholder="Longitude"
              className="border rounded px-3 py-2"
            />
          </div>

          {/* Contact */}
          <input
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border rounded px-3 py-2 w-full"
          />
          <input
            name="website"
            value={user.website}
            onChange={handleChange}
            placeholder="Website"
            className="border rounded px-3 py-2 w-full"
          />

          {/* Company */}
          <h3 className="font-semibold">Company</h3>
          <input
            name="company.name"
            value={user.company.name}
            onChange={handleChange}
            placeholder="Company Name"
            className="border rounded px-3 py-2 w-full"
          />
          <input
            name="company.catchPhrase"
            value={user.company.catchPhrase}
            onChange={handleChange}
            placeholder="Catch Phrase"
            className="border rounded px-3 py-2 w-full"
          />
          <input
            name="company.bs"
            value={user.company.bs}
            onChange={handleChange}
            placeholder="BS"
            className="border rounded px-3 py-2 w-full"
          />

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
