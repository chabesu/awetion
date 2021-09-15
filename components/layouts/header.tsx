import blogConfig from "@/blog.config";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { SocialList } from "../common/social-list";

export const Header: React.VFC = () => {
  const socialKeys = Object.keys(blogConfig.account.social);
  return (
    <header className="header-outer">
      <div className="header-inner">
        <div className="header-content">
          <div className="social-list-wrap">
            <SocialList />
          </div>
          <div className="logo-wrap">
            <Link href="/">
              <a href="/">
                <img src={blogConfig.siteLogo} alt={blogConfig.siteName} />
              </a>
            </Link>
          </div>
          <ul className="header-nav">
            {blogConfig.navigation.map((n) => (
              <li>
                <Link href={n.url}>
                  <a href={n.url}>{n.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .header-outer {
            background-color: #fff;
          }
          .header-inner {
            padding-top: 33px;
            top: 0;
            background-color: #fff;
            width: 100%;
            z-index: 10;
          }
          .header-content {
            max-width: calc(var(--container-width) + 20px);
            padding: 0 10px;
            margin: 0 auto;
            position: relative;
          }
          .logo-wrap {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
          }
          .header-nav {
            list-style-type: none;
            padding: 0;
            display: flex;
            justify-content: center;
            border-bottom: 3px solid #f0f4f2;
            max-width: var(--container-width);
            margin: 0 auto;
          }
          .header-nav li {
            padding: 15px 25px;
            text-transform: uppercase;
            font-weight: bold;
            color: var(--c-text-gray-lighter);
          }
          .social-list-wrap {
            position: absolute;
            top: 0;
            left: 10px;
            @media screen and (max-width: ${blogConfig.styles.breakPoints
                .medium}) {
              display: none;
            }
          }
        `}
      </style>
    </header>
  );
};