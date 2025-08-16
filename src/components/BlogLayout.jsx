import { Outlet } from "react-router-dom";

function BlogLayout({ blogs, addBlog }) {
  return <Outlet context={{ blogs, addBlog }} />;
}

export default BlogLayout;
