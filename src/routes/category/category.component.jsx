import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import { CategoryContainer, Title } from "./category.styles";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading
} from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  // わざわざ、useEffectでラップした理由
  // ラップせずに行うと、このコンポーネントがレンダリングされるたびに牡蠣が走る
  // categoriesMapからcategoryを使ってproductsを取得する処理
  // ラップすることで、categoryもしくはcategoriesMap変更時のみ走るようにする
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
