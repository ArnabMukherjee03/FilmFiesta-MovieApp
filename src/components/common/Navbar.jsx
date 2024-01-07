import { NavLink } from "react-router-dom";
import AutoLayout from "../AutoLayout";
import { IoSearch } from "react-icons/io5";
import { useCallback,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchItem from "./SearchItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { searchData, searchResult, searchStatus } from "../../store/movieSlice";

const navItems = [
  {
    id: 123,
    name: "Home",
    route: "/",
  },
  {
    id: 124,
    name: "Movies",
    route: "/movies",
  },
  {
    id: 125,
    name: "Tv Shows",
    route: "/tvshows",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isNav,setNav] = useState(false);
  const dispatch = useDispatch();

  const searchResults = useSelector(searchResult);
  const status = useSelector(searchStatus);

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 600);
    };
  };

  const handleChange = (value) => {
    value ? setShow(true) : setShow(false);
    dispatch(searchData({ url: "/search/movie", args: value }));
  };

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedFn = useCallback(debounce(handleChange), []);

 
  return (
    <nav className="absolute z-40 w-full h-[300px] top-[25px]">
      <AutoLayout>
        <div className="relative flex justify-between pl-5 lg:pl-10">
          <GiHamburgerMenu onClick={()=>setNav(!isNav)} className="text-3xl text-white cursor-pointer lg:hidden" />
          <div className={`absolute top-[30px] ${isNav?"left-[-7px]":"left-[-800px]"} py-[30px] px-[60px] gap-2 lg:py-0 lg:px-0  bg-white flex flex-col lg:top-0 lg:left-0 lg:relative lg:bg-transparent lg:flex-row lg:gap-7`}>
            {navItems?.map((items) => {
              return (
                <NavLink key={items.id} to={items?.route}>
                  <span className="font-heading text-black lg:text-white text-lg">
                    {items?.name}
                  </span>
                </NavLink>
              );
            })}
          </div>
          {/* Search... */}
          <div className="w-[80%] lg:w-[30%] h-[30px] bg-white rounded-3xl flex relative">
            <div className="w-[10%]">
              <IoSearch className="w-full mt-[6px] ml-1 " />
            </div>
            <input
              type="text"
              onChange={(e) => {
                optimizedFn(e.target.value)
              }}
              placeholder="Search Movies or Actors"
              className="taxt-sm font-para pl-2 w-[80%] outline-none "
            />
            <SearchItem data={searchResults} show={show} status={status} />
          </div>
        </div>
      </AutoLayout>
    </nav>
  );
};

export default Navbar;
