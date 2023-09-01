import {
  CategoryPreviewContainer,
  CategoryPreviewLink,
  CategoryPreviewMain
} from "./category-preview.styles.jsx";
import ProductCard from "../../components/product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewLink to={title}>
          {title.toUpperCase()}
        </CategoryPreviewLink>
      </h2>
      <CategoryPreviewMain>
        {products
          .filter((_product, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </CategoryPreviewMain>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
