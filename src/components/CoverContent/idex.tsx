import React, { ReactNode } from "react";
import "./styles.scss";

type CoverContentProps = {
  bgImg: string;
  children?: ReactNode;
};

const CoverContent: React.FC<CoverContentProps> = ({ bgImg, children }) => {
  return (
    <div className="cover-content-container" data-testid="image">
      <div className="image">
        <div
          className="cover-bg-image"
          style={{ backgroundImage: `url(${bgImg})` }}
          data-testid="cover-bg-image"
        />
      </div>
      {children}
    </div>
  );
};

export default CoverContent;
