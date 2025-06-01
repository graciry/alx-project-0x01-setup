import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <PostCard title="First Post" body="This is the body of the first post." />
      </main>
    </div>
  );
};

export default PostsPage;
