type BlogsListProps = {
  blogs: { title: string; body: string; author: string; id: number }[];
  title: string;
  handleDelete(id: number): void;
};
export function BlogsList({ blogs, title, handleDelete }: BlogsListProps) {
  return (
    <div className="blogsList">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
}
