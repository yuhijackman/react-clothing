import { Fragment } from "react";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.entries(categoriesMap).map(([title, items]) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={items}
          ></CategoryPreview>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
