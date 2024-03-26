import imgCreateAndShareMobile from "./assets/home/mobile/create-and-share.jpg";
import imgCreateAndShareTablet from "./assets/home/tablet/create-and-share.jpg";
import imgCreateAndShareDesktop from "./assets/home/desktop/create-and-share.jpg";

import imgBeautifulStoriesMobile from "./assets/home/mobile/beautiful-stories.jpg";
import imgBeautifulStoriesTablet from "./assets/home/tablet/beautiful-stories.jpg";
import imgBeautifulStoriesDesktop from "./assets/home/desktop/beautiful-stories.jpg";

import imgDesignedForEveryoneMobile from "./assets/home/mobile/designed-for-everyone.jpg";
import imgDesignedForEveryoneTablet from "./assets/home/tablet/designed-for-everyone.jpg";
import imgDesignedForEveryoneDesktop from "./assets/home/desktop/designed-for-everyone.jpg";

export const infoComponentsData = [
  {
    id: 1,
    title: "Create and share your photo stories.",
    text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    link: { text: "GET AN INVITE", href: "" },
    image: {
      mobile: imgCreateAndShareMobile,
      tablet: imgCreateAndShareTablet,
      desktop: imgCreateAndShareDesktop,
    },
  },
  {
    id: 2,
    title: "Beautiful stories every time",
    text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    link: { text: "VIEW THE STORIES", href: "" },
    image: {
      mobile: imgDesignedForEveryoneMobile,
      tablet: imgDesignedForEveryoneTablet,
      desktop: imgBeautifulStoriesDesktop,
    },
  },
  {
    id: 3,
    title: "Designed for everyone",
    text: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
    link: { text: "VIEW THE STORIES", href: "" },
    image: {
      mobile: imgBeautifulStoriesMobile,
      tablet: imgBeautifulStoriesTablet,
      desktop: imgDesignedForEveryoneDesktop,
    },
  },
];
