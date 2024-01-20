import React, { useRef} from 'react'
import { AutoLayout} from '../../components'
import CastCard from '../../components/card/CastCard';

const Cast = ({data}) => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 204; 
      if (direction === 'left') {
        container.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };
  

  return (
    <>
    <AutoLayout className="mt-[30px] lg:mt-[60px]">
        <p className="font-heading my-4 text-xl lg:text-xl lg:leading-[26px] text-[#E95E55]">
          Top Billed Cast
        </p>
        <div ref={scrollContainerRef} className="w-full flex gap-6 px-2 py-4 no-scrollbar overflow-x-auto ">
            {
                data?.map(cast=>{
                    return <CastCard key={cast?.id} data={cast} className='w-[180px] cursor-pointer'/>
                })
            }
        </div>
        <div className="flex mt-4">
          <button onClick={() => handleScroll('left')}>Scroll Left</button>
          <button onClick={() => handleScroll('right')}>Scroll Right</button>
        </div>
      </AutoLayout>
      </>
  )
}

export default Cast
