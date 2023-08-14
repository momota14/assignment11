import blogData from "@/utils/blogData";
import { redirect } from "next/navigation";

function Post({ params }) {
  const postId = params.id;
  const filterItems = blogData.find((blog) => "" + blog.id === postId);

  if (!filterItems) {
    redirect("/404");
  }

  return (
    <div>
      <div>
        <h1>{filterItems.title}</h1>
        <div>{filterItems.date}</div>
      </div>

      <div className="gap">{filterItems.content}</div>
    </div>
  );
}

export default Post;
