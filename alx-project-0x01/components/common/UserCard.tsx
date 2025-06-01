import { FC } from 'react';
import { UserData } from '@/interfaces';

const UserCard: FC<UserData> = ({ name, username, email, phone, website, address, company }) => {
  return (
    <div className="border rounded p-4 shadow-md">
      <h2 className="text-lg font-bold">{name}</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> {website}</p>
      <p><strong>Address:</strong> {address.street}, {address.city}</p>
      <p><strong>Company:</strong> {company.name}</p>
    </div>
  );
};

export default UserCard;
