import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  VideoCameraIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import Contact from "./Contact";

const CONTACTS = [
  {
    id: 1,
    name: "Jeff Bezos",
    src: "https://links.papareact.com/4zn",
  },
  {
    id: 2,
    name: "Mark Zukenberg",
    src: "https://links.papareact.com/xql",
  },
  {
    id: 3,
    name: "Elon Musk",
    src: "https://links.papareact.com/k2j",
  },
  {
    id: 4,
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
  },
  {
    id: 5,
    name: "The Queen",
    src: "https://links.papareact.com/6gg",
  },
  {
    id: 6,
    name: "James Bond",
    src: "https://links.papareact.com/r57",
  },
];

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>

      {CONTACTS.map((contact) => (
        <Contact key={contact.id} name={contact.name} src={contact.src} />
      ))}
    </div>
  );
};

export default Widgets;
