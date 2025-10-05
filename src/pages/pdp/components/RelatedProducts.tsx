import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FeaturedCard from "@/components/Cards/FeaturedCard/FeaturedCard";
import { Product } from "@/interfaces/Product";

const sampleProduct: Product = {
  id: "339336d2-0b5c-490b-9014-c9f3c52e6d6f",
  name: "Smart Speaker",
  brand: "Apple",
  category: "Smart Home Devices",
  price: 199.99,
  wasPrice: 249.99,
  isSale: false,
  isFeatured: false,
  discountPercentage: 20,
  description: "aliquip excepteur non minim adipisicing fugiat qui ullamco",
  rating: {
    value: 3.38,
    votedCount: 729,
  },
  createdAt: "2023-05-22T06:23:24.082Z",
  specialOffer: null,
  colors: ["salmon", "white", "brown", "aqua"],
  soldTimes: 1984,
  code: "0B5C-490B",
  thumbnail:
    "https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Smart Speaker",
  imageSet: [
    "https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Smart Speaker 1",
    "https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Smart Speaker 2",
    "https://placehold.co/600x400/EEE/31343C?font=playfair-display&text=Smart Speaker 3",
  ],
};

const featuredProducts = [
  sampleProduct,
  sampleProduct,
  sampleProduct,
  sampleProduct,
];
export default function RelatedProducts() {
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
    <div>
      <h3>Related Products</h3>
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
        {featuredProducts.map((product, index) => (
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
    </div>
  );
}
