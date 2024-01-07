import { tmdbImg } from "../../config/Conf";
// import { FaStar } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';



const SearchCard = ({ data }) => {
  return (
    <div className="flex w-full px-4 py-2 gap-4 cursor-pointer animate-fade-in ">
      <div className="w-[30%]">
      <LazyLoadImage
        width={100}
        effect="blur"
        src={`${tmdbImg}${data?.poster_path}`}
        alt={data?.title}
      />
      </div>
        <div className="space-y-2">
         <div className="flex gap-2">
          <p className="font-heading cursor-pointer">{data?.title}</p>
          {/* <p className="font-heading flex gap-2 text-sm"><FaStar className="mt-[3px] text-yellow-300" /> {String(data?.vote_average).slice(0,3)}</p> */}
        </div>
        <p className="font-para">Release : {data?.release_date}</p>
        <p className="font-para leading-5">
          {data?.overview.slice(0, 100)}....
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
