import { SkeletonCard } from "./SkeletoonCard";

 

export function MySkeleton ( ) {
  return (
    <div>
        <div>
            <h2 className="text-center font-bold text-3xl py-6">Costomized skeleton</h2>
        </div>
<div className="flex  justify-around py-10">
 
        <div>
            <SkeletonCard/>
        </div>
        <div>
            <SkeletonCard/>
        </div>
        <div>
            <SkeletonCard/>
        </div> 
  
</div>
</div>

  );
}
