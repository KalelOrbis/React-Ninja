import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const blog = { title, body, author };

    console.log(JSON.stringify(blog));

    setIsPending(true);

    fetch("http://blog-server:3000/create", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label> Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Blog body:</label>
        <textarea
          required
          defaultValue=""
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label htmlFor="">Blog Author:</label>
        <input
          type="text"
          name=""
          id=""
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && (
          <button type="submit" disabled>
            Adding Blog...
          </button>
        )}
      </form>
    </div>
  );
}
