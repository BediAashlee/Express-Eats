import React from "react";
import { IMG_CDN_URL } from "../constants.js";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  locality,
  areaName,
  avgRatingString,
  cuisines,
}) => {
  return (
    <div className="w-48 px-3">
      <img
        className="w-48 h-40"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant logo"
      />
      <h2 className="font-semibold text-xl">{name}</h2>
      <h3 className="text-sm">
        {locality} {", "} {areaName}
      </h3>
      <h4 className="font-bold">{avgRatingString} Stars</h4>
      <h5 className="font-medium">{cuisines?.join(", ")}</h5>
    </div>
  );
};

export default RestaurantCard;
