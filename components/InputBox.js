import React, { useState, useRef } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { firestore as db, storage } from "../firebase";
import firebase from "../firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

const InputBox = () => {
  const { data } = useSession();
  const [post, setPost] = useState("");
  const filePickerRef = useRef(null);
  const [postImage, setPostImage] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!post) return;

    db.collection("posts")
      .add({
        message: post,
        name: data.user.name,
        email: data.user.email,
        image: data.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (postImage) {
          const storageRef = ref(storage, `posts/${doc.id}`);

          uploadString(storageRef, postImage, "data_url")
            .then((snapshot) => {
              console.log("SNAPSHOT", snapshot);
              console.log("Uploaded a data_url string!");
            })
            .catch((err) => console.error("ERROR::", err))
            .finally(() => {
              getDownloadURL(ref(storage, `posts/${doc.id}`)).then((url) => {
                db.collection("posts").doc(doc.id).set(
                  {
                    postImage: url,
                  },
                  { merge: true }
                );
              });
            });
          removeImage();
        }
      });
    setPost("");
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setPostImage(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setPostImage(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          alt={data.user.name}
          src={data.user.image}
          width={40}
          height={40}
        />
        <form className="flex flex-1" onSubmit={sendPost}>
          <input
            name="post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${data.user.name}?`}
          />
          <button hidden type="submit">
            Submit
          </button>
        </form>

        {postImage && (
          <div
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
            onClick={removeImage}
          >
            <picture>
              <source srcSet={postImage} type="image/webp" />
              <img
                className="h-10 object-contain"
                src={postImage}
                alt="posted image"
              />
            </picture>

            <p className="text-xs text-red-400 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500 " />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-500 " />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            type="file"
            hidden
            ref={filePickerRef}
            onChange={addImageToPost}
          />
        </div>
        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-500 " />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
