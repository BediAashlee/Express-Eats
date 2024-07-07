export function filterData(searchText, restaurants) {
  restaurants.filter((restaurant) =>
    restaurant?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.name
      ?.tolowercase()
      ?.includes(searchText.toLowerCase())
  );
}
