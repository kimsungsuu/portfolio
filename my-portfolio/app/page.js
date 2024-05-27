"use client";

import Left from "@/app/layouts/left";
import Right from "@/app/layouts/right";
import styles from "@/public/styles/main.module.scss";
import { useState } from "react";

export default function Home() {
  const [section, setSection] = useState("AboutMe");
  return (
    <div className={styles.body}>
      <Left />
      <Right />
    </div>
  );
}
