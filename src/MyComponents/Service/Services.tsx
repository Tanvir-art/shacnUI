import { Clock, DollarSign, Wrench } from "lucide-react"
import { Service } from "./Service"


const Services = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Service
                title={"Professional Handyman"}
                text={"Our goal is to provide you the best handyman service."}
                icon={<Wrench />}
            />

            <Service
                title={"24/7 Services"}
                text={"We provide 24/7 service. Whenever you call, we service you."}
                icon={<Clock />}
            />

            <Service
                title={"Affordable Price"}
                text={"We check for glitches that need attention to keep you safe and save."}
                icon={<DollarSign />}
            />
        </div>
    )
}

export default Services
