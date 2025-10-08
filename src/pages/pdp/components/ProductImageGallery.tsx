import { useState } from "react";
import { S } from "./ProductDetails.styles";

interface ProductImageGalleryProps {
  imageSet: string[];
  productName: string;
}

export default function ProductImageGallery({
  imageSet,
  productName,
}: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <S.ThumbnailList>
        {imageSet.map((image, index) => (
          <S.Thumbnail key={index}>
            <S.ThumbnailButton onClick={() => handleThumbnailClick(index)}>
              <img
                src={image}
                alt={`Image of ${productName} nr. ${index + 1}`}
              />
            </S.ThumbnailButton>
          </S.Thumbnail>
        ))}
      </S.ThumbnailList>
      <S.SelectedImageWrapper>
        <img
          src={imageSet[selectedImageIndex]}
          alt={`Selected image of ${productName}`}
        />
      </S.SelectedImageWrapper>
    </>
  );
}
