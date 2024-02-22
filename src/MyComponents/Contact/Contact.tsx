import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Contact = () => {


    return (
        <div className="bg-[#1D2736] my-20 flex  ">
            <div className="flex-1 hidden md:hidden lg:block flex justify-end ">
                <img src="/image/a.webp" className="mt-16 ml-40" alt="" />
            </div>
            <div className="flex-1 py-10 bg-[#fff] mt-10 ">
                <div className="flex flex-col gap-6">
                <form className="mx-auto w-[430px]">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="name" >Name</Label>
                        <Input type="name" id="name" placeholder="Email" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5 py-6">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email">Select</Label>
                        <Select>
                            <SelectTrigger >
                                <SelectValue placeholder="Select from here" />
                            </SelectTrigger>
                            <SelectContent>

                                <SelectGroup>
                                    <SelectLabel>Select</SelectLabel>
                                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>

                                </SelectGroup>


                            </SelectContent>
                        </Select>

                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5 pt-6">
                    <Label htmlFor="email">Textarea</Label>
                    <Textarea placeholder="Type your message here." />
                    </div>
                    <div className="flex justify-center py-4">
                    <button className="bg-[#333] px-4 py-2 text-white">Submit</button>
                    </div>
                </form>
                </div>
            </div>
            <div className="flex-1 hidden md:hidden lg:block ">
                <div className="">

                <img src="/image/b.webp" className="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
