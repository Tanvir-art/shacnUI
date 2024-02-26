import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
 
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="flex items-center gap-4">
        <Skeleton className="w-10 h-10 rounded-full"/>
        <Skeleton className="h-4 w-[180px]" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] " />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  
  )
}
