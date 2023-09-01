import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import "./category.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
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
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
