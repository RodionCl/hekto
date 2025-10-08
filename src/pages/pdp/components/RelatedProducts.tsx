import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FeaturedCard from "@/components/Cards/FeaturedCard/FeaturedCard";
import { Product } from "@/interfaces/Product";
import { S } from "./ProductDetails.styles";
import { PaginatedResult } from "@/interfaces/FetchProduct";
import { fetchProducts } from "@/utils/fetch/fetchProducts";
import { useFetch } from "@/hooks/useFetch";

interface RelatedProductsProps {
  category: string;
}
export default function RelatedProducts({ category }: RelatedProductsProps) {
  const { fetchedData: products } = useFetch<PaginatedResult<Product>>(
    () =>
      fetchProducts({
        categories: [category],
        page: 1,
        perPage: 4,
      }),
    {
      data: [],
      total: 0,
    },
    [],
  );

  const handleAddToCart = (id: string) => {
    alert(`Product with ID: ${id} added to cart!`);
  };

  const handleAddToWishlist = (id: string) => {
    alert(`Product with ID: ${id} added to wishlist!`);
  };

  const handleZoom = (id: string) => {
    alert(`Zooming image: ${id}`);
  };

  const handleViewDetails = (id: string) => {
    alert(`Navigating to details for product ID: ${id}`);
  };

  return (
    <S.RelatedProducts>
      <S.RelatedTitle>Related Products</S.RelatedTitle>
      <Swiper
        slidesPerView={"auto"}
        style={{ overflow: "visible" }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
      >
        {products.data.map((product, index) => (
          <SwiperSlide key={index} style={{ width: "auto", flexShrink: 0 }}>
            <FeaturedCard
              product={product}
              productUrl={`/products/${product.id}`}
              onAddToCart={() => handleAddToCart(product.id)}
              onAddToWishlist={() => handleAddToWishlist(product.id)}
              onZoom={() => handleZoom(product.id)}
              onViewDetails={() => handleViewDetails(product.id)}
              maxWidth="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.RelatedProducts>
  );
}
