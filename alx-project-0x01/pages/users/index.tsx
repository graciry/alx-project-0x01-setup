// pages/users/index.tsx

import { useState } from "react";
import UserCard from "@/components/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData, UserProps } from "@/interfaces";

const initialUsers: UserProps[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }
];

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>(initialUsers);
  const [showModal, setShowModal] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    const userWithId: UserProps = {
      ...newUser,
      id: users.length + 1 // ensures `id` is present
    };
    setUsers((prev) => [...prev, userWithId]);
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      {showModal && (
        <UserModal onClose={() => setShowModal(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
}
