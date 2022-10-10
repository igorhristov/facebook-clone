import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

import {
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import HeaderIcon from "./HeaderIcon";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          alt="logo"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}

      <div className="flex items-center sm:space-x-2 justify-end">
        {/* profile picture */}
        <Image
          onClick={signOut}
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          alt="userImage"
          className="cursor-pointer rounded-full"
        />
        <p className="font-semibold pr-3 whitespace-nowrap">Igor Hristov</p>
        <Bars3Icon className="icon" />
        <ChatBubbleBottomCenterTextIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
