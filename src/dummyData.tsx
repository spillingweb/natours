import Photo1S from "./assets/img/nat-1.jpg";
import Photo1L from "./assets/img/nat-1-large.jpg";
import Photo2S from "./assets/img/nat-2.jpg";
import Photo2L from "./assets/img/nat-2-large.jpg";
import Photo3S from "./assets/img/nat-3.jpg";
import Photo3L from "./assets/img/nat-3-large.jpg";

export type photoObject = {
  id: string;
  src: {
    large: string;
    small: string;
  };
  alt: string;
};

export const DUMMY_PHOTOS = [
  {
    id: "photo1",
    src: {
      large: Photo1L,
      small: Photo1S,
    },
    alt: "Mountains nature",
  },
  {
    id: "photo2",
    src: {
      large: Photo2L,
      small: Photo2S,
    },
    alt: "Bicycling in nature",
  },
  {
    id: "photo3",
    src: {
      large: Photo3L,
      small: Photo3S,
    },
    alt: "Hiking in nature",
  },
];

export type cardObject = {
  id: string;
  icon: string;
  title: string;
  text: string;
};

export const DUMMY_CARDS: cardObject[] = [
  {
    id: "card1",
    icon: "world",
    title: "Explore The World",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
  {
    id: "card2",
    icon: "compass",
    title: "Meet Nature",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
  {
    id: "card3",
    icon: "map",
    title: "Find Your Way",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
  {
    id: "card4",
    icon: "heart",
    title: "Live a Healthier Life",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
];

import ImageTour1 from "./assets/img/nat-5.jpg";
import ImageTour2 from "./assets/img/nat-6.jpg";
import ImageTour3 from "./assets/img/nat-7.jpg";

export type tourObject = {
  id: string;
  title: string;
  color: "orange" | "green" | "blue";
  image: {
    src: string;
    alt: string;
  };
  days: number;
  noPeople: number;
  noGuides: number;
  accomodation: "hotel" | "tent";
  difficulty: "easy" | "medium" | "hard";
  price: number;
};

export const DUMMY_TOURS: tourObject[] = [
  {
    id: "tour1",
    title: "The Sea Explorer",
    color: "orange",
    image: {
      src: ImageTour1,
      alt: "Coastal landscape",
    },
    days: 3,
    noPeople: 30,
    noGuides: 2,
    accomodation: "hotel",
    difficulty: "easy",
    price: 297,
  },
  {
    id: "tour2",
    title: "The Forest Hiker",
    color: "green",
    image: {
      src: ImageTour2,
      alt: "Mountain and forest view",
    },
    days: 7,
    noPeople: 40,
    noGuides: 6,
    accomodation: "tent",
    difficulty: "medium",
    price: 497,
  },
  {
    id: "tour3",
    title: "The Snow Adventurer",
    color: "blue",
    image: {
      src: ImageTour3,
      alt: "Winter and mountain landscape",
    },
    days: 5,
    noPeople: 15,
    noGuides: 3,
    accomodation: "tent",
    difficulty: "hard",
    price: 897,
  },
];

import User1 from "./assets/img/nat-8.jpg";
import User2 from "./assets/img/nat-9.jpg";

export type storyObject = {
  title: string;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  text: string;
};

export const DUMMY_STORIES: storyObject[] = [
  {
    title: "I had the best week ever with my family",
    name: "Mary Smith",
    image: {
      src: User1,
      alt: "Woman paddling",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
  },
  {
    title: "Wow! My life is completely different now",
    name: "Jack Wilson",
    image: {
      src: User2,
      alt: "Man looking out on mountains",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
  },
];

import BgVideoMp4 from "./assets/img/video.mp4";
import BgVideoWebm from "./assets/img/video.webm";

export type BgVideoObject = {
  src: string;
  type: string;
};

export const BG_VIDEOS: BgVideoObject[] = [
  {
    src: BgVideoMp4,
    type: "video/mp4",
  },
  {
    src: BgVideoWebm,
    type: "video/webm",
  },
];
