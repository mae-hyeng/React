import { useEffect } from "react";

const usepageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, []);
};

export default usepageTitle;
