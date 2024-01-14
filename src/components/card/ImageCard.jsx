import { LazyLoadImage } from "react-lazy-load-image-component";
import { tmdbImg } from "../../config/Conf";
import { FaCirclePlay } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const genere = ["Adventure", "Action", "Science"];

const ImageCard = ({isPlayer=false, movie, className = "",getTrailer}) => {
  return (
    <div
      className={`flex  flex-col gap-1 pb-2 lg:gap-2 transition-transform duration-300 transform hover:scale-105 ${className}`}
    >  
      <LazyLoadImage
        effect="blur"
        className="w-full relative"
        src={`${tmdbImg}${movie?.poster_path}`}
        alt={movie?.title}
      />
      {isPlayer?<FaCirclePlay onClick={() => getTrailer(movie?.id)} className="absolute cursor-pointer  top-[40%] left-1/2 text-4xl text-white translate-x-[-50%]"/>:null}
      <p className="w-full font-heading text-[8px] lg:text-base lg:leading-[26px]">
        <NavLink to={`/movies/${movie?.id}`}>{movie?.title}</NavLink>
      </p>
      <p className="font-para text-[8px] lg:text-base text-gray-500">
        {genere?.map((gen, id) => {
          return (
            <span key={id}>
              {gen}
              {id < genere.length - 1 ? "," : null}{" "}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default ImageCard;
