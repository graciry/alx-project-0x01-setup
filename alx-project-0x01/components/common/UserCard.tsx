// components/common/UserCard.tsx
import { UserProps } from "@/interfaces";

interface Props {
  user: UserProps;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2 text-blue-700">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-gray-800 mt-2">{user.email}</p>
      <p className="text-gray-600 text-sm mt-1">Company: {user.company.name}</p>
      <p className="text-gray-500 text-xs mt-2">City: {user.address.city}</p>
    </div>
  );
};

export default UserCard;
