import { useProductDetails } from "@/hooks/useProductDetails";
import { S } from "./components/ProductDetails.styles";
import ProductImageGallery from "./components/ProductImageGallery";
import ProductInfo from "./components/ProductInfo";
import { ProductTabs } from "./components/ProductTabs";
import RelatedProducts from "./components/RelatedProducts";

export default function ProductDetails() {
  const { id, product, isFetching } = useProductDetails();

  if (!id) {
    return <div>Invalid product ID</div>;
  }

  if (isFetching) {
    return <h1>Loading Product...</h1>;
  }

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <S.Layout>
      <S.Main>
        <ProductImageGallery
          imageSet={product.imageSet}
          productName={product.name}
        />
        <ProductInfo product={product} />
      </S.Main>
      <S.DetailsWrapper>
        <ProductTabs />
      </S.DetailsWrapper>
      <RelatedProducts />
    </S.Layout>
  );
}
