import Link from "next/link";
import styles from "../assets/css/home.module.css";

export default function Home() {
  return (
    <main>
      <h1>Welcome to our blog page</h1>
      <div className={styles.gap}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        repudiandae ab consectetur modi ratione veniam recusandae, delectus,
        sapiente quia animi aperiam illo perferendis corporis facere possimus
        doloribus? Nostrum, deleniti maxime. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Adipisci repudiandae ab consectetur modi
        ratione veniam recusandae, delectus, sapiente quia animi aperiam illo
        perferendis corporis facere possimus doloribus? Nostrum, deleniti
        maxime.
      </div>
      <div className={styles.gap}>
        <Link href="/blog">
          <button className={styles.button}>Go to blog</button>
        </Link>
      </div>
    </main>
  );
}