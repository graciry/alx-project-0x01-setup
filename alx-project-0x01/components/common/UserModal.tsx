import React, { useState } from 'react';
import { UserData } from '@/interfaces';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newUser: Omit<UserData, 'id'>) => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<UserData, 'id'>>({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value,
        },
      }));
    } else if (name.startsWith('company.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Add User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full border p-2" required />
          <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="w-full border p-2" required />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border p-2" required />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full border p-2" />
          <input name="website" value={formData.website} onChange={handleChange} placeholder="Website" className="w-full border p-2" />
          
          {/* Address inputs */}
          <input name="address.street" value={formData.address.street} onChange={handleChange} placeholder="Street" className="w-full border p-2" />
          <input name="address.suite" value={formData.address.suite} onChange={handleChange} placeholder="Suite" className="w-full border p-2" />
          <input name="address.city" value={formData.address.city} onChange={handleChange} placeholder="City" className="w-full border p-2" />
          <input name="address.zipcode" value={formData.address.zipcode} onChange={handleChange} placeholder="Zipcode" className="w-full border p-2" />

          {/* Company inputs */}
          <input name="company.name" value={formData.company.name} onChange={handleChange} placeholder="Company Name" className="w-full border p-2" />
          <input name="company.catchPhrase" value={formData.company.catchPhrase} onChange={handleChange} placeholder="Catch Phrase" className="w-full border p-2" />
          <input name="company.bs" value={formData.company.bs} onChange={handleChange} placeholder="Business Statement" className="w-full border p-2" />

          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
