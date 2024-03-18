import React from "react";
import "./styles.scss";

export type ListItemTextProps = {
  className?: string;
  itemList: { title: string; value: string; discount?: number }[];
  title: string;
};

const ListItemText: React.FC<ListItemTextProps> = ({
  className,
  itemList,
  title,
}) => {
  return (
    <div className={`list-item-text-container ${className}`}>
      <h2>{title}</h2>
      <hr />
      <ul>
        {itemList.map(({ title, value, discount }, idx) => (
          <li key={idx + 1}>
            {!discount && <span className="title-text">{title} </span>}

            {!discount && (
              <span className="value-text">
                <i>{value}</i>
              </span>
            )}

            {discount && (
              <span className="discount">
                <i>{discount}% DTO</i>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItemText;
