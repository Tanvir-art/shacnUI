import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function Slider() {
    return (
        <div className="flex justify-center">
            <Carousel className="w-full max-w-8xl relative group">
                <CarouselContent className="h-[600px]">
                    <CarouselItem className="bg-[#333] text-white flex justify-center items-center">
                        <div className="">
                             <h2 className="text-3xl font-bold">Slider Headline</h2>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="bg-[#333] text-white flex justify-center items-center">
                        <div className="">
                             <h2 className="text-3xl font-bold">Slider Headline</h2>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="bg-[#333] text-white flex justify-center items-center">
                        <div className="">
                             <h2 className="text-3xl font-bold">Slider Headline</h2>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-10 top-72 opacity-0 group-hover:opacity-100 transition duration-300" />
                <CarouselNext className="absolute right-10 top-72 opacity-0 group-hover:opacity-100 transition duration-300" />
            </Carousel>
        </div>
    );
}
