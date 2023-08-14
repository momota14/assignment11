import blogData from "@/utils/blogData";
import Link from "next/link";
import styles from "../../assets/css/blog.module.css";

function Blog() {
  return (
    <div>
      <h1>Blog Lists</h1>

      <div className={styles.gap}>
        {blogData.map((blog, idx) => {
          return (
            <div key={idx}>
              <Link href={`/blog/${blog.id}`}>
                <div className={styles.blogList}>
                  {blog.id}. {blog.title}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
