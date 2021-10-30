import React from "react";
import useBlogs from "services/blogs/useBlogs";

function Blog() {
  const { data, isLoading } = useBlogs();

  if (isLoading) {
    return <p>is loading ...</p>;
  }

  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
      {data?.map((blog) => (
        <div key={blog.id} className="flex flex-col space-y-2 md:w-1/3">
          <div className="w-full bg-gray-600 rounded h-36"></div>
          <div className="flex items-center space-x-4">
            <div className="p-2 text-sm font-medium bg-red-600 rounded-xl">
              News
            </div>
            <p className="text-sm font-thin">
              {new Date(blog.date).toDateString()}
            </p>
          </div>
          <h2 className="text-xl font-bold cursor-pointer hover:underline">
            {blog.message.toUpperCase()}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Blog;
