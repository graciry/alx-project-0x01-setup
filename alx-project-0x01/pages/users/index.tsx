import React from "react";
import Button from "@/components/common/Button";

const UsersPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <Button title="Click Me" onClick={() => alert("Button clicked!")} />
    </div>
  );
};

export default UsersPage;
