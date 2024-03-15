import React from "react";
import { Products } from "../../types";
import "./styles.scss";

type ProductCardProps = {
  productList: Products[];
};

const ProductCard: React.FC<ProductCardProps> = ({ productList }) => {
  return (
    <div className="product-cards-container">
      {productList.map(
        (
          { brand, category, image, name, price, discount, hasDiscount },
          idx
        ) => (
          <div
            className="product-card"
            key={idx + 1}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="product-card-category">{category}</div>
            <div className="product-card-detail">
              <span className="product-card-detail-brand">{brand}</span>
              <span className="product-card-detail-name">{name}</span>
              <span className="product-card-detail-price">
                {`$COP ${price}`}
              </span>
            </div>
            {hasDiscount && discount && (
              <span className="product-card-offer">{`${discount}% DTO`}</span>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default ProductCard;
