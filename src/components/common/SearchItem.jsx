import SearchCard from "./SearchCard"
import { Skeleton } from ".."

const SearchItem = ({data,show,status}) => {
  
  return (
    <div className={`absolute snap-y no-scrollbar  overflow-y-scroll bg-white top-[32px] mx-[14px] h-[400px] left-[-98px] lg:left-[-70px] w-[350px] lg:w-[400px] ${show?"block":"hidden"}`}>
       {
        status?
        Array(5).fill(0).map((_,index)=>{
          return  <Skeleton key={index}/>
        })
        :
        data.length === 0 ?
           <div className="font-heading absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"> Oops! No Movie Found</div>
        :
        data?.map((item)=>{
           return <SearchCard key={item?.id} data={item}/>
        })
       }
    </div>
  )
}

export default SearchItem
