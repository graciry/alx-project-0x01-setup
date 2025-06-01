import { useState } from 'react';
import { UserData } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';

const UsersPage = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

 const handleAddUser = (newUser: Omit<UserData, 'id'>) => {
  const userWithId: UserData = {
    ...newUser,
    id: Date.now(), // unique timestamp-based id
  };

  setUsers([...users, userWithId]);
  setIsModalOpen(false);
};

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add User
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        ))}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export default UsersPage;
