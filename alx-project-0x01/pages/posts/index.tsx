import React from "react";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <PostCard title="First Post" body="This is the body of the first post." />
    </div>
  );
};

export default PostsPage;
