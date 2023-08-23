import { getSingleBlog } from "@/async/blogs/single/singleAsync";
import React from "react";

const BlogPage = async ({ params }) => {
  const { slug } = params;
  const blog = await getSingleBlog(slug);
  return (
    <div className="container mx-auto my-12 p-9">
      {blog ? (
        <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
          <div className="card w-100 glass">
            <figure>
              <img src={blog?.postDetails?.img} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog?.postDetails?.title}</h2>
              <p>{blog?.postDetails?.content}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
