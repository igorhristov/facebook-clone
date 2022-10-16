import React from "react";
import Image from "next/image";
import { HandThumbUpIcon, ShareIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

const Post = ({ name, message, image, postImage, timestamp }) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt={name}
          />
          <div>
            <p className="font-medium">
              {name} {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image
            src={postImage}
            objectFit="cover"
            layout="fill"
            alt="post image"
          />
        </div>
      )}
      {/* Post footer */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <HandThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none ">
          {" "}
          <ChatBubbleLeftIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          {" "}
          <ShareIcon className="h-4 " />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
