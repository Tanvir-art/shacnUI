import { Separator } from "@/components/ui/separator"
import { ReactNode } from 'react';

export interface IServiceProps {
    title: string,
    text: string,
    icon: ReactNode
}

export function Service(props: IServiceProps) {
    return (
        <div className="flex gap-6 items-center px-10 py-20">
            <div className="bg-[#111] w-14 h-14 flex justify-center items-center rounded py-2 px-4">
                <span className="text-white text-xl">
                    {props.icon}
                </span>
            </div>

            <div>
                <h2 className="text-2xl font-bold"> {props.title} </h2>
                <Separator className="my-4" />
                <p className="text-sm ">{props.text}</p>
            </div>


        </div>
    );
}
