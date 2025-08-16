import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import octopusImg from "../assets/gaintOctopus.webp";

function BlogDetail() {
  const { blogs } = useOutletContext();
  const { id } = useParams();
  const blog = blogs.find((b) => Number(b.id) === Number(id));

  if (!blog) {
    return <p className="text-center text-red-500 mt-10">Blog not found!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={octopusImg}
        alt={blog.title}
        className="w-full rounded-lg shadow-md mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 leading-relaxed">{blog.text}</p>
    </div>
  );
}

export default BlogDetail;
