import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import octopusImg from "../assets/gaintOctopus.webp";
import "./BlogPage.css";

function BlogPage({ blogs, addBlog }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "" || title.trim() === "") {
      return;
    }
    addBlog(title, text);
    setTitle("");
    setText("");
  };

  return (
    <div className="flex flex-col m-2">
      <h1 className="flex text-2xl font-bold items-center justify-center">
        Blog Page
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4 max-w-lg mx-auto my-5"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Blog content"
          className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold cursor-pointer py-2 px-4 rounded-md hover:bg-[antiquewhite] transition-colors duration-200"
        >
          Add Blog
        </button>
      </form>

      <div className="flex-1 m-2 divide-y divide-gray-300">
        {/* Highlight section */}
        <div className="mb-6">
          <img src={octopusImg} alt="octopus" className="w-[500px]" />
          <p className="text-gray-600 mt-5">
            Learn more about our latest product releases and their early impact
            on lead flow to designers.
          </p>
        </div>

        {/* Blog items */}
        {blogs.map((blog) => (
          <div key={blog.id} className="space-y-6 ">
            <div className="flex flex-row items-center justify-start">
              <div className="flex-shrink-0 m-2">
                <img
                  src={octopusImg}
                  alt="octopus"
                  className="w-[200px] cursor-pointer"
                />
              </div>

              <div className="m-2">
                <Link to="blog">
                  <h3 className="font-semibold">{blog.title}</h3>
                </Link>
                <Outlet />
                <p className="text-gray-600 line-clamp-2 lg:line-clamp-3">
                  {blog.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
