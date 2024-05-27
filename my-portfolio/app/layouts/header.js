import styles from "@/public/styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <p>Kimsungsu's portfolio</p>
      <div className={styles.contact}>
        <p>Github</p>
        <p>Velog</p>
        <p>Notion</p>
      </div>
    </header>
  );
}
