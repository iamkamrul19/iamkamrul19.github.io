import Image from "next/image";
import Link from "next/link";
import React from "react";
import { External, Github } from "../SVG/SVG";
const Sproject = ({ content }) => {
  console.log("content :", content);
  return (
    <section>
      <div className="w-[10/12] md:w-8/12 mx-auto  my-5  p-5 rounded-xl shadow-[0px_0px_3px_1px_rgba(255,255,255,0.39)]  lg:hidden">
        <h6 className="text-[#e6f1ff] text-xl">Spotify Profile</h6>
        <hr className="border-[#64ffda] w-6/12 mt-2" />
        <p className="text-base text-[#a8b8d1] pt-6 ">
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </p>
        <div className="text-theme-text-highlight flex gap-x-3  gap-y-2 flex-wrap pt-6">
          <p>React</p>
          <p>Mongo DB</p>
          <p>Express</p>
          <p>Heroku</p>
          <p>React</p>
        </div>
        <div className=" flex gap-x-3  gap-y-2 flex-wrap pt-6">
          <Link href="/">
            <a target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank" rel="noopener noreferrer">
              <External />
            </a>
          </Link>
        </div>
      </div>
      <div
        className={`hidden lg:flex w-full mx-auto  my-5  items-center ${
          content % 2 !== 0 && "flex-row-reverse"
        }`}
      >
        <div className="w-2/3">
          <Image alt="image" src="/p1.png" height={600} width={952} />
        </div>
        <div className="w-1/3   relative">
          <h6
            className={`text-[#e6f1ff] text-xl pb-10  ${
              content % 2 !== 0 ? "text-left" : "text-right"
            }`}
          >
            Spotify Profile
          </h6>
          <p
            className={`text-lg text-[#a8b8d1] p-6   bg-theme-bg w-[600px] absolute right-0 rounded-xl shadow-[0px_0px_3px_0px_rgba(255,255,255,0.1)] ${
              content % 2 !== 0 ? "left-0 text-left" : "right-0 text-right"
            }`}
          >
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
          <div
            className={`text-theme-text-highlight flex gap-x-3  gap-y-2 flex-wrap pt-6  mt-[200px] ${
              content % 2 !== 0 ? "justify-start" : "justify-end"
            }`}
          >
            <p>React</p>
            <p>Mongo DB</p>
            <p>Express</p>
            <p>Heroku</p>
            <p>React</p>
          </div>
          <div
            className={`flex gap-x-3  gap-y-2 flex-wrap pt-6 ${
              content % 2 !== 0 ? "justify-start" : "justify-end"
            }`}
          >
            <Link href="/">
              <a target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </Link>
            <Link href="/">
              <a target="_blank" rel="noopener noreferrer">
                <External />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sproject;
