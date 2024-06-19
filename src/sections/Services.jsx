

import Servicecard from "../components/Servicecard"
import { services } from "../constants"


const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-6">
      {services.map((service)=>(
        <Servicecard key={service.label}{...service}/>
       
       
        
      ))}

    </section>
  )
}

export default Services