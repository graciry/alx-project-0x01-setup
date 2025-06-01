import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-2xl font-semibold text-blue-700">{name}</h2>
      <p className="text-gray-600">📧 {email}</p>
      <p className="text-gray-600">📞 {phone}</p>
      <p className="text-gray-600">🌐 {website}</p>
      <p className="mt-2 text-sm text-gray-500">🏢 {company.name} — {company.catchPhrase}</p>
      <p className="text-sm text-gray-500">📍 {address.suite}, {address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;
