import { Link } from "react-router-dom";
import { Blog } from "../Types";

type BlogsListProps = {
  blogs: Blog[];
  title: string;
  handleDelete?(id: number): void;
};
export function BlogsList({ blogs, title }: BlogsListProps) {
  return (
    <div className="blogsList">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
