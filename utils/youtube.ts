export const isYouTubeURL = (url: URL): boolean => {
  if (["www.youtube.com", "youtu.be"].includes(url.hostname)) {
    return true;
  }
  return false;
};

// Supported URL
//
// - http://youtu.be/0zM3nApSvMg
// - http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index
// - http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s
// - http://www.youtube.com/watch?v=0zM3nApSvMg
// - http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0
// - http://www.youtube.com/embed/0zM3nApSvMg?rel=0
export const parseYouTubeVideoId = (url: URL): string => {
  if (!isYouTubeURL(url)) return "";

  if (url.hostname === "youtu.be") {
    return url.pathname.split("/")[1];
  }
  if (url.pathname === "/watch") {
    return url.searchParams.get("v");
  }
  const elements = url.pathname.split("/");

  if (elements.length < 2) return "";

  if (elements[1] === "v" || elements[1] === "embed") {
    return elements[2];
  }

  return "";
};
