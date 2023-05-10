import { Blog } from "../Types";
import useFetch from "../useFetch";
import { BlogsList } from "./BlogsList";

export function Home() {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch<Blog[]>("http://localhost:3000/blogs", "GET");
  console.log(blogs);
  return (
    <div className="home">
      {error && <div>{error.message}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogsList blogs={blogs} title="All blogs" />}
    </div>
  );
}
