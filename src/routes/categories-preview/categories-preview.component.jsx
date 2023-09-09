import { Fragment } from "react";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.entries(categoriesMap).map(([title, items]) => {
          return (
            <CategoryPreview
              key={title}
              title={title}
              products={items}
            ></CategoryPreview>
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
