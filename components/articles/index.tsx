import Link from "next/link";
import styled from "styled-components";
import media from "styled-media-query";

export const ArticleWrapper: React.FC = ({ children }) => {
  return (
    <div className="article-wrapper">
      {children}
      <style jsx>
        {`
          .article-wrapper {
            display: flex;
            justify-content: space-between;
            max-width: var(--container-width);
            width: 95%;
            margin: 0 auto;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

export const LatestArticle: React.FC = ({ children }) => {
  return (
    <div className="latest-article">
      {children}
      <style jsx>
        {`
          .latest-article {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export const ArticleLink: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="article-link" href={href}>
        {children}
        <style jsx>
          {`
            .article-link {
              display: block;
              width: 100%;
            }
          `}
        </style>
      </a>
    </Link>
  );
};

export const ArticleList: React.FC = ({ children }) => {
  return (
    <div className="article-list">
      {children}
      <style jsx>{`
        .article-list {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export const AritcleColumn: React.FC<{ column?: number }> = ({
  children,
  column = 3,
}) => {
  return (
    <div className="article-column">
      {children}
      <style jsx>
        {`
          .article-column {
            width: ${column ? `${100 / column}%` : "100%"};
            padding: 15px;
          }
        `}
      </style>
    </div>
  );
};