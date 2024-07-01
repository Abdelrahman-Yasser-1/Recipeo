import React from "react";
import Chip from "../Chip";
import { PiBookOpenTextThin } from "react-icons/pi";
import { RandomRecipe } from "@src/core";
import ImagePlaceholder from "../ImagePlaceholder";
import { Img } from "react-image";
import { Link } from "react-router-dom";

export default React.memo((props: RandomRecipe) => {
  const {
    id,
    title,
    summary,
    imageType,
    vegan,
    vegetarian,
    glutenFree,
    dairyFree,
    readyInMinutes,
  } = props;

  return (
    <div className="flex w-full h-[22rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg pb-4">
      <div className="relative overflow-hidden text-white shadow-lg bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 h-[10rem]">
        <Img
          src={`https://img.spoonacular.com/recipes/${id}-636x393.${imageType}`}
          unloader={
            <ImagePlaceholder alt={title} className="w-full h-[10rem]" />
          }
          loader={<ImagePlaceholder alt={title} className="w-full h-[10rem]" />}
          className="object-cover w-full h-[10rem]"
          loading="lazy"
          alt={title}
          decode={false}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        <div className="!absolute top-4 right-4 flex flex-row justify-center items-center">
          <PiBookOpenTextThin size={25} className="mx-[0.15rem]" />
          <p>{readyInMinutes + " mins"}</p>
        </div>
      </div>
      <div className="p-4">
        <Link to={`recipe/${id}`}>
          <p className="font-sans antialiased font-medium text-xl leading-snug tracking-normal text-blue-gray-900 line-clamp-1 mb-3 hover:underline hover:cursor-pointer">
            {title}
          </p>
        </Link>
        <div
          dangerouslySetInnerHTML={{ __html: summary }}
          className="font-sans leading-relaxed text-gray-700 line-clamp-2"
        />
      </div>
      <div className="flex flex-wrap gap-2 px-4">
        {vegetarian && <Chip>#vegetarian</Chip>}
        {vegan && <Chip>#vegan</Chip>}
        {glutenFree && <Chip>#glutenFree</Chip>}
        {dairyFree && <Chip>#diaryFree</Chip>}
      </div>
    </div>
  );
});
