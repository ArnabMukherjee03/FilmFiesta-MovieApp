import Skeletons from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Skeleton = () => {
  return (
    <div className="flex w-full px-4 py-2 gap-4 cursor-pointer animate-fade-in ">
      <Skeletons width={105} height={158}/>
      <div className="space-y-2">
       <div className="flex gap-2">
        <Skeletons width={230} height={24} />
      </div>
      <p className="font-para">
        <Skeletons width={230} height={24}/>
      </p>
      <p className="font-para leading-5">
      <Skeletons width={230} height={88}/>
      </p>
    </div>
  </div>
  )
}

const ImageSkeleton =({className=""})=>{
   return(
    <div className={`flex  flex-col gap-1 pb-2 lg:gap-2  ${className}`}>
      <div className="h-[169px] lg:h-[346px]">
       <Skeletons width="100%" height="100%"/>
       </div>
       <p className="w-full font-heading text-[8px] lg:text-base lg:leading-[26px] h-[24px] lg:h-[52px]"><Skeletons width="100%" height="100%"/></p>
       <p className="font-para text-[8px] lg:text-base text-gray-500 h-[12px] lg:h-[16px]">
         <Skeletons width="100%" height="100%"/>
       </p>
    </div>
   )
}

export {Skeleton,ImageSkeleton}
