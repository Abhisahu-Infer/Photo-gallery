import React from 'react'
import { useState, useCallback, useMemo, useReducer, useEffect } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos'
import SearchBar from './SearchBar';
import PhotoCard from './PhotoCard';
import favouriteReducer from './favouriteReducer';

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();


  const [ search, setSearch ] = useState("");


  const [ favourites, dispatch ] = useReducer(
    favouriteReducer,
    JSON.parse( localStorage.getItem("favourites") || "[]" )
  );

  useEffect(()=>{
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites])

  const handleSearchChange = useCallback((value)=>{
    setSearch(value);
  }, []);

  const filteredphotos = useMemo(()=>{
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    ); 
  }, [photos, search]) 

  
  if (loading){
    return <h2>Loading photos....</h2>
  }

  if (error){
    return <h2>{error}</h2>
  }

  return (
    <div>
      <div className="text-center py-2">
        <SearchBar search={search} onSearchChange={handleSearchChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
        {filteredphotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            favourites={favourites}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery
