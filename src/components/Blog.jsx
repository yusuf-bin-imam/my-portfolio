import React from "react";
import blog from "../../src/image/blog.jpg";
const Blog = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div>
          <img className="w-1/2 mx-auto" src={blog} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
