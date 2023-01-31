import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { BlogsList } from "./BlogsList";
import { Blog } from "../Types";

export function BlogDetails() {
  const { id: blogID } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch<Blog>(`http://localhost:8000/blogs/${blogID}`);

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
}
