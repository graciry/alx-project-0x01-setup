// components/common/UserCard.tsx
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto my-4">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-600">{website}</p>
      <p className="text-gray-600">Company: {company.name}</p>
      <p className="text-gray-600">City: {address.city}</p>
    </div>
  );
};

export default UserCard;
