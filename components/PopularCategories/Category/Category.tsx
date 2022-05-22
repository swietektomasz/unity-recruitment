import Image from "next/image";
import styles from "./Category.module.css";

type Props = {
  title: string;
  imageName: string;
  imageAlt: string;
};

export const Category = ({ title, imageName, imageAlt }: Props) => (
  <div className={styles.category}>
    <div className={styles.categoryIcon}>
      <Image
        src={`/icons/${imageName}.png`}
        alt={imageAlt}
        layout="fill"
        objectFit="contain"
      />
    </div>
    {title}
  </div>
);
