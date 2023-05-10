import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { Blog } from "../Types";

export function BlogDetails() {
  const { id: blogID } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch<Blog[]>(`http://localhost:3000/blogs/${blogID}`, "GET");
  const location = useLocation();
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:3000/blogs/${blogID}`, { method: "DELETE" }).then(
      () => {
        navigate("/");
      }
    );
  };

  console.log(JSON.stringify(blog), JSON.parse(JSON.stringify(blog)));
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {blog && (
        <article>
          <h2>{blog[0].title}</h2>
          <p>by {blog[0].author}</p>
          <div>{blog[0].body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}
