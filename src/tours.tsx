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
