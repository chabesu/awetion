import blogConfig from "@/blog.config";
import { Wrapper } from "./wrapper";

export const Hero: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="hero">
      <div className="hero-cover">
        <Wrapper>
          <div className="hero-inner">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-description">{description}</p>
          </div>
        </Wrapper>
      </div>
      <style jsx>
        {`
          .hero {
            background-color: var(--c-primary);
            background-image: url(${blogConfig.hero.image});
            background-size: cover;
            background-position: center center;
            text-align: center;
          }
          .hero-cover {
            padding: 50px 0;
            background-color: rgba(0, 0, 0, 0.3);
          }
          .hero-description {
            font-size: var(--text-lg);
            color: #fff;
          }
          .hero-inner {
            width: 100%;
          }
          .hero-title {
            font-size: 50px;
            margin-bottom: 20px;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
};