import { LazyLoadImage } from "react-lazy-load-image-component";
import { tmdbImg } from "../../config/Conf";

const genere = ["Adventure", "Action", "Science"];

const ImageCard = ({ movie, className = "" }) => {
  return (
    <div
      className={`flex  flex-col gap-1 pb-2 lg:gap-2 transition-transform duration-300 transform hover:scale-105 ${className}`}
    >
      <LazyLoadImage
        effect="blur"
        className="w-full"
        src={`${tmdbImg}${movie?.poster_path}`}
        alt={movie?.title}
      />
      <p className="w-full font-heading text-[8px] lg:text-base lg:leading-[26px]">
        {movie?.title}
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
