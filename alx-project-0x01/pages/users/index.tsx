import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <Button title="Click Me" onClick={() => alert("Button clicked!")} />
      </main>
    </div>
  );
};

export default UsersPage;
