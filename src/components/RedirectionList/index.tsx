import React from "react";
import "./styles.scss";

export type RedirectionListProps = {
  title: string;
  redirects: Redirection[];
};

type Redirection = {
  text: string;
  redirectUrl: string;
};

const RedirectionList: React.FC<RedirectionListProps> = ({
  redirects,
  title,
}) => {
  return (
    <div className="redirection-list">
      <span>{title}</span>
      <ul>
        {redirects.map(({ redirectUrl, text }, idx) => (
          <li key={idx + 1}>
            <a href={redirectUrl}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedirectionList;
