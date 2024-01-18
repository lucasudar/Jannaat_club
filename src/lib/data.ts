import event1 from "/public/event1.png";
import event2 from "/public/event2.png";
import event3 from "/public/event3.png";
import event4 from "/public/event4.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Events",
    hash: "#events",
  },
  {
    name: "Features",
    hash: "#features",
  },
  {
    name: "Reviews",
    hash: "#reviews",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const eventsData = [
  {
    title: "DJ Night",
    description:
      "Hear and feel every vibe.",
    tags: ["29 February 2024", "Mumbai, India", "$350"],
    imageUrl: event1,
  },
  {
    title: "Ocean and Thunder",
    description:
      "Club night with fire show.",
    tags: ["1st March 2024", "Pattaya, Thailand", "$300"],
    imageUrl: event2,
  },
  {
    title: "Bollywood Dancer",
    description:
      "Most famous dancer from India.",
    tags: ["3 March 2024", "Mumbai, India", "$400"],
    imageUrl: event3,
  },
  {
    title: "Cocktail Party",
    description:
      "Try any cocktails with no limits.",
    tags: ["5 March 2024", "Pattaya, Thailand", "$350"],
    imageUrl: event4,
  },
] as const;

export const featuresData = [
  "VIP Zone", "Hookah", "Restaurant", "Bar", "Lounge Area", "Dance Floor", "Special Events"
] as const;
