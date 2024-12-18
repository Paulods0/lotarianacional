import { Skeleton } from "../ui/skeleton"

const ListingNewsSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="w-full h-full flex flex-col gap-3">
          <Skeleton key={index} className="w-full h-[200px] rounded-[20px]" />
          <Skeleton key={index} className="w-[150px] h-[15px]" />
          <div className="flex flex-col gap-2">
            <Skeleton key={index} className="w-[90%] h-[15px]" />
            <Skeleton key={index} className="w-[60%] h-[15px]" />
          </div>
          <Skeleton key={index} className="w-[100px] h-[35px]" />
        </div>
      ))}
    </div>
  )
}

export default ListingNewsSkeleton