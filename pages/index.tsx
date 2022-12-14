import { getArticles } from "@/utils/get-articles";
import { Layout } from "@/components/layout";
import { Article } from "@/types";
import {
  ArticleLink,
  ArticleList,
  LatestArticle,
  AritcleColumn,
} from "@/components/articles";
import { ArticleCard } from "@/components/articles/card";
import { Title } from "@/components/texts";
import { Wrapper } from "@/components/common/wrapper";
import blogConfig from "@/blog.config";
import { Hero } from "@/components/common/hero";
import { LinkButton } from "@/components/buttons";

const TopPage = ({ articles, max }: { articles: Article[]; max: number }) => {
  return (
    <Layout>
      <Hero
        title={blogConfig.hero.title}
        description={blogConfig.hero.description}
      />
      <Wrapper>
        <main className="main">
          <ArticleList>
            <Title>{blogConfig.topPage.title}</Title>
            <LatestArticle>
              {articles.map((article) => (
                <AritcleColumn key={article.slug} column={3}>
                  <ArticleLink
                    href={`/${article.data.category}/${article.slug}`}
                  >
                    <ArticleCard article={article.data} />
                  </ArticleLink>
                </AritcleColumn>
              ))}
            </LatestArticle>
            <div className="link-button-wrap">
              {max > 1 && (
                <LinkButton href="/page/2">
                  {blogConfig.topPage.readMoreLabel}
                </LinkButton>
              )}
            </div>
          </ArticleList>
        </main>
      </Wrapper>
      <style jsx>
        {`
          .main {
            width: 100%;
          }
          .link-button-wrap {
            text-align: center;
            margin-top: 30px;
          }
        `}
      </style>
    </Layout>
  );
};

export default TopPage;

export const getServerSideProps = async () => {
  const articles = await getArticles();

  return {
    props: {
      current: 1,
      max: Math.ceil(articles.length / blogConfig.article.articlesPerPage),
      articles: articles
        .sort((articleA, articleB) => {
          if (articleA.data.date > articleB.data.date) {
            return -1;
          }
          return 1;
        })
        .slice(0, blogConfig.article.articlesPerPage)
        .map((article) => {
          const { content, ...others } = article;
          return others;
        }),
    },
  };
};
