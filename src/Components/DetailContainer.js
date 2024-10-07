const DetailContainer = ({ data }) => {
  

  const {
    areaName,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    name,
    totalRatingsString,
    sla,
  } = data;
  return (
    <div className="px-4 py-1  pb-8 rounded-lg shadow-lg  ">
      <h1 className="text-2xl font-bold">{name}</h1>
      <div className="w-full bg-white py-4 rounded-lg px-4 mt-8 shadow-2xl ">
        <h1 className="text-xl font-semibold">
          {avgRatingString} ({totalRatingsString})•{costForTwoMessage}
        </h1>
        <p className="my-2 text-orange-600 font-bold hover:underline">
          {cuisines.join(",")}
        </p>
        <ul className="ml-10 my-2">
          <li className="my-2">Outlet - {areaName}</li>
          <li>{sla.slaString}</li>
        </ul>
        <p className="mt-7 text-gray-600 font-medium">
          
          {sla.lastMileTravelString}| Delivery fees applicable. Delivered &
          charged by the restaurant.
        </p>
      </div>
    </div>
  );
};

export default DetailContainer;
