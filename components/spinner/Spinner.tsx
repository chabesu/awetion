import { FC } from "react";

export const Spinner: FC = () => {
  return (
    <>
      <div className="loadingWrap">
        <div className="loading" />
      </div>
      <style jsx>
        {`
          .loadingWrap {
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
          }
          .loading {
            width: 5em;
            height: 5em;
            border-top: 1em solid rgba(255, 255, 255, 0.2);
            border-right: 1em solid rgba(255, 255, 255, 0.2);
            border-bottom: 1em solid rgba(255, 255, 255, 0.2);
            border-left: 1em solid rgba(255, 255, 255, 1);
            animation: loaderAnime 1s infinite linear;
            border-radius: 50%;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            z-index: 11;
          }

          @keyframes loaderAnime {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .loadingNone {
            animation: loadingAnime 1s forwards;
          }

          @keyframes loadingAnime {
            0% {
              opacity: 1;
            }
            99% {
              opacity: 0;
            }
            100% {
              opacity: 0;
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};
