import Link from "next/link";
import React from "react";

const BlogComp = ({ blog }) => {
  return (
    <div className="my-16">
      <h1 className="block hover:underline text-2xl mx-2 font-bold text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight dark:text-white">
        We Deliver Best <span className="text-blue-600">Blogs</span>
      </h1>
      {blog ? (
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blog?.map((item, index) => {
            return (
              <Link
                key={index.toString()}
                href={"/blog/" + item["id"]}
                className="card w-100 glass shadow-sm hover:shadow-xl p-2 rounded-md"
              >
                <figure>
                  <img
                    className="w-full rounded-md"
                    src={item["img"]}
                    alt="car!"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item["title"]}</h2>
                  <p>{item["short"]}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default BlogComp;
