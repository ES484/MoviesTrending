import React from 'react';
import {useContext } from 'react';
import { MediaContext } from './../MediaContext';
import { Link } from 'react-router-dom';
export default function Movies() {
  const {trendingMovies, baseImageUrl} = useContext(MediaContext);

  return (
    <>
    {
        trendingMovies? <div className='row'>
        <div className="col-md-4 d-flex align-items-center">
          <div className='w-100'>
            <div className="w-25 brdr mb-3"></div>
            <h2>Trending</h2>
            <h2>Movies</h2>
            <h2>To watch now</h2>
            <p className='secondColor'>Most watched movies by day</p>
            <div className="mb-3 brdr"></div>
          </div>
        </div>
        {trendingMovies.map((movie, index)=>
          <div className='col-md-2 my-3' key={index}>
            <div>
              <Link to={`/movieDetails/${movie.id}`}>
                <img className='img-fluid' src={baseImageUrl+ movie.poster_path} alt='poster_Image'/>
                <h5>{movie.title}</h5>
              </Link>
            </div>
          </div>
        )}
      </div>: ''
      }
    </>
  )
}
