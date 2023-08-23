import { getBlogs } from "@/async/blogs/blogsAsync";
import React from "react";
import BlogComp from "../blog/blog";

const BlogsComp = async () => {
  const blogs = await getBlogs();
  return (
    <>
      <BlogComp blog={blogs} />;
    </>
  );
};

export default BlogsComp;
