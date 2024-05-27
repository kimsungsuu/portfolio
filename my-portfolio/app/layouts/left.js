import styles from "@/public/styles/left.module.scss";
import { useState } from "react";

export default function Header({ selectedSection }) {
  const sectionClass = selectedSection
    ? styles["selected-section"]
    : styles["unselected-section"];

  return (
    <div className={styles["left-layout"]}>
      <p className={sectionClass}>About Me</p>
      <p className={sectionClass}>Project</p>
      <p className={sectionClass}>ETC</p>
    </div>
  );
}
