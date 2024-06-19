
import { arrowRight } from "../assets/icons"
import { useState } from "react"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import Shoecard from "../components/Shoecard"


const Hero = () => {
  const [bigShoeImg,setbigShoeImg]=useState(bigShoe1)
  return (
   <section id="home" className="w-full flex xl:flex-row flex-col 
     justify-center min-h-screen  p-2 gap-10 max-container">
    <div className="relative xl:w-2/5 flex-col justify-center items-center w-full max-lg:padding-x pt-28">

    <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
    <h1 className="mt-10 font-palanquin text-8xl 
    max-sm:text-[72px] max-sm:leading-[82px] font-bold">
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-9">The New Arrival</span>
      <br/>
      <span className="text-coral-red inline-block mt-3">Nike</span>
      Shoes

    </h1>
    <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">Discover Stylish Nike arrivals,Quality comfort,
      and innovation for your active life.
    </p>
    <Button label="Shop Now" iconURL={arrowRight}/>
    <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
      {statistics.map((stat) => (
        <div key={stat.label}>
          <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
          <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
        </div>
      ))}

    </div>
    </div>

    <div className="relative flex-1 justify-center items-center xl:min-h-screen max-lg:py-20 bg-primary bg-hero bg-cover bg-center">
      <img src={bigShoeImg} alt="shoecollection" 
      width={610}
      height={500}
      className="object-contain relative z-10 py-20"
      
      />
      <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
      {shoes.map((shoe)=>(
        <div key={shoe}>
        <Shoecard imgURL={shoe} 
        changeBigshoeImage={(shoe)=>setbigShoeImg(shoe)}
        bigShoeImg={bigShoeImg}/>
        
        </div>

      ))}

       </div>
    </div>
 
   </section>
  )
}

export default Hero