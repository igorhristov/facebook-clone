import React from "react";
import StoryCard from "./StoryCard";

const StoriesData = [
  {
    id: 1,
    name: "Jeff Bezos",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    id: 2,

    name: "Mark Zukenberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    id: 3,

    name: "Elon Musk",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    id: 4,

    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {StoriesData.map(({ id, name, src }) => (
        <StoryCard key={id} name={name} src={src} />
      ))}
    </div>
  );
};

export default Stories;
