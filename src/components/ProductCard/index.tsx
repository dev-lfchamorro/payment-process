import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { paths } from "../../constants";
import { selectProduct } from "../../redux/actions";
import { Product } from "../../types";
import "./styles.scss";
import { formatNumber } from "../../helpers";

type ProductCardProps = {
  productList: Product[];
};

const ProductCard: React.FC<ProductCardProps> = ({ productList }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (product: Product) => {
    dispatch(selectProduct(product));
    navigate(`${paths.products}/${product.id}`, { replace: true });
  };

  return (
    <div className="product-cards-container">
      {productList.map((product, idx) => {
        const {
          brand,
          category,
          image,
          id,
          name,
          price,
          discount,
          hasDiscount,
        } = product;

        return (
          <div
            className="product-card"
            key={idx + 1}
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => id && handleClick(product)}
          >
            <div className="product-card-category">{category}</div>
            <div className="product-card-detail">
              <span className="product-card-detail-brand">{brand}</span>
              <span className="product-card-detail-name">{name}</span>
              <span className="product-card-detail-price">{`$COP ${formatNumber(
                price
              )}`}</span>
            </div>
            {hasDiscount && discount && (
              <span className="product-card-offer">{`${discount}% DTO`}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
