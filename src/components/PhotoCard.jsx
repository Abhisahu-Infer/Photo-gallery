import React from 'react'

const PhotoCard = ({photo, favourites, dispatch}) => {
  return (
    <div>
      <div className="bg-white rounded-xl">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="w-full h-70 object-cover p-2 rounded-xl"
        />
        <div className="flex justify-between px-3 py-2 items-center">
          <p className="font-semibold text-gray-500 ">
            Author name: {photo.author}
          </p>
          <button
            onClick={() =>
              dispatch({ type: "TOGGLE_HEART", payload: photo.id })
            }
            className="font-bold text-4xl text-red-500 cursor-pointer">
            {favourites.includes(photo.id) ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard
