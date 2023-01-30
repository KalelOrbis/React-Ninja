import { useEffect, useState } from "react";
import { BlogsList } from "./BlogsList";

export function Home() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("mario");
  const handleDelete = (id: number) => {
    const keptBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(keptBlogs);
  };

  useEffect(() => {
    console.log("state changed");
    console.log(name);
  }, [name]);
  return (
    <div className="home">
      <BlogsList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Luigi")}>Change Name</button>
      <p>{name}</p>
      {/* <BlogsList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
        handleDelete={handleDelete}
      /> */}
    </div>
  );
}
