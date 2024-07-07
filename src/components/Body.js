import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    /* console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (c) => c.info
      )
      ); */
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  }

  return (
    <>
      <div className="py-3 px-5 ">
        <input
          type="text"
          placeholder="search a restaurant"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-between px-4">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
