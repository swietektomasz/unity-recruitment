import { Category } from "./Category/Category";
import { categories } from "../../utils/categories";
import styles from "./PopularCategories.module.css";

export const PopularCategories = () => {
  return (
    <div>
      <h1 className={styles.categoriesHeader}>Popularne kategorie</h1>
      <div className={styles.categoryContainer}>
        {categories.map(({ title, id, imageAlt, imageName }) => (
          <Category
            key={id}
            title={title}
            imageAlt={imageAlt}
            imageName={imageName}
          />
        ))}
      </div>
    </div>
  );
};
