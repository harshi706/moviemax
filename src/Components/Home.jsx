import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom';
import List from './List'

export default function Home(){
    const[popular,setPopular]=React.useState([])
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res=>res.json())
        .then(data=>setPopular(data.results))
        .catch(error=>console.log(error));
    },[])

    return(
        <>
        <div className='caro'>
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={2}
            infiniteLoop={true}
            showStatus={false}
            >
                {
                    popular.map(movie=>(
                        <Link to={`/movie/${movie.id}`} className='movie-card'>
                        <div className='image'>
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            <div className='title'>
                                {movie ? movie.original_title : ""}
                            </div>
                        </div>
                            <div className='overlay'>
                            <div className='runtime'>
                                {movie ? movie.release_date : ""}
                                <br></br>
                                <span className='rating'>
                                {movie ? movie.vote_average : ""}
                                <i className="fas fa-star" />{" "}
                                </span>
                            </div>
                            <div className='desc'>{movie ? movie.overview : ""}</div>
                        </div>
                        </Link>
                    ))
                }
            </Carousel>
            <List />
        </div>
         </>
    )
}