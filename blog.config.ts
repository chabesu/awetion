import { BlogConfig } from "./types/config";

const blogConfig: BlogConfig = {
  use: "notion", // mdx or notion
  siteLogo: {
    url: "/images/logo.svg",
    width: "201",
    height: "39",
  },
  siteName: "AWETION",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  title: "A W E T I O N .",
  description: "AWESOME Blog Theme + Notion",
  googleAnalyticsCode: "", // G-**********
  googleAdsenseCode: "", // ca-pub-****************
  notFoundPage: {
    title: "404",
    subtitle: "The page you were looking for was not found.",
    image: "/images/not-found.jpeg",
    description: `The page you were looking for was not found due to reasons such as
    "already deleted" or "URL is different".`,
  },
  topPage: {
    title: "NEW POSTS",
    readMoreLabel: "Read More",
  },
  categoryPage: {
    title: "NEW POSTS",
    readMoreLabel: "Read More",
  },
  articlePage: {
    afterContentAd: "",
  },
  widgets: {
    categoryList: {
      title: "CATEGORY",
    },
    tagList: {
      title: "TAG",
    },
    share: {
      title: "Share",
      socials: ["twitter", "facebook"],
    },
    fixedSidebar: {
      ad: "",
    },
  },
  styles: {
    containerMaxWidth: "1280px",
    colors: {
      primary: "#50C0A1",
      primaryLighter: "#EFF7F3",
      primaryGradient: "linear-gradient(to right, #06A9B7, #B0DE87)",
      base: "#F2F4F3",
      border: "",
      bg: "#F7F7F7",
      text: "#2C2C2C",
      grayLighter: "#A0A0A0",
    },
    breakPoints: {
      huge: "1440px",
      large: "1170px",
      medium: "768px",
      small: "450px",
    },
  },
  hero: {
    title: "A W E T I O N .",
    image: "/images/sinwave.gif",
    description: "AWESOME Blog Theme + Notion as Headless CMS ≒ A W E T I O N",
  },
  footer: {
    title: "AWESOME Blog Theme + Notion as Headless CMS",
  },
  article: {
    defaultThumbnail: "/images/sinwave.gif",
    articlesPerPage: 6,
  },
  navigation: [
    {
      name: "tech",
      url: `/tech`,
    },
    {
      name: "study",
      url: `/study`,
    },
    {
      name: "journal",
      url: `/journal`,
    },
  ],
  subNavigation: [
    {
      name: "about",
      url: "/about/about",
    },
    {
      name: "雑学エンジニアブログ",
      url: "https://zatsugaku-engineer.com/",
    },
    {
      name: "チャベログ",
      url: "https://chabelog.com/",
    },
  ],
  account: {
    name: "チャベス",
    description: "Product Development Engineer, Notioner",
    image: `/images/me.png`,
    social: {
      twitter: "https://twitter.com/ChabesuB",
      github: "https://github.com/chabesu/awtion",
    },
  },
  writers: [
    {
      id: "チャベス",
      name: "チャベス",
      description: "Product Development Engineer, Notioner",
      image: "/images/me.png",
    },
    {
      id: "awesome",
      name: "Mr. AWESOME",
      description: "profile here profile here profile here profile here",
      image: "/images/me.jpeg",
    },
  ],
  categories: [
    {
      id: "about",
      title: "About",
      imagePath: "/images/me.png",
      description: "About Me",
    },
    {
      id: "tech",
      title: "Tech",
      imagePath: "/images/sinwave.gif",
      description: "Articles about Tech",
    },
    {
      id: "study",
      title: "Study",
      imagePath: "/images/english.jpg",
      description: "Articles about study",
    },
    {
      id: "journal",
      title: "Journal",
      imagePath: "/images/journal.jpg",
      description: "My Journal",
    },
  ],
  tags: [
    {
      id: "awesome",
      title: "AWESOME",
    },
    {
      id: "english",
      title: "English",
    },
  ],
};

export default blogConfig;
