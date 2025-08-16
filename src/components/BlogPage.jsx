import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import octopusImg from "../assets/gaintOctopus.webp";
import "./BlogPage.css";

function BlogPage() {
  const { blogs, addBlog } = useOutletContext();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "" || title.trim() === "") {
      return;
    }
    addBlog(title, text);
    setTitle("");
    setText("");
    setIsModalOpen(false); // close modal after submit
  };

  return (
    <div className="flex flex-col m-2 relative">
      <h1 className="text-4xl font-bold text-center mb-6">Blog Page</h1>

      {/* Add Blog Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 w-fit"
        >
          + Add Blog
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Add a New Blog</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
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
          </div>
        </div>
      )}

      {/* Blog Content */}
      <div className="flex-1 m-2 divide-y divide-gray-300 mt-5">
        {/* Highlight section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10 p-6 bg-white rounded-xl shadow-lg">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={octopusImg}
              alt="octopus"
              className="w-[500px] max-w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Work In Progress
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Learn more about our latest product releases and their early
              impact on lead flow to designers.
            </p>
          </div>
        </div>

        {/* Blog items */}
        {blogs.map((blog) => (
          <div key={blog.id} className="space-y-6">
            <div className="flex flex-row items-center justify-start">
              <div className="flex-shrink-0 m-2">
                <img
                  src={octopusImg}
                  alt="octopus"
                  className="w-[200px] cursor-pointer rounded-lg shadow-md mb-6"
                />
              </div>

              <div className="m-2">
                <Link to={`blog/${blog.id}`} key={blog.id}>
                  <h3 className="font-semibold">{blog.title}</h3>
                </Link>

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
