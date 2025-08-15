import { Outlet } from "react-router-dom";

function BlogLayout() {
  return (
    <div>
      <h1>this is a blog page</h1>
      <Outlet />
    </div>
  );
}

export default BlogLayout;
