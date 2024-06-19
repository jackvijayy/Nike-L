import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
  <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

    <div className="flex flex-1 flex-col">
   
    <h2 className=" font-palanquin text-4xl capitalize lg:max-w-lg
     font-bold">
      We Provide You 
      <span className="text-coral-red ml-2">
        super
        </span>
        <br />
      <span className="text-coral-red ">
        Quality
        </span>
      shoes
    </h2>
    <p className="mt-4 lg:max-w-lg info-text ">
      Ensuring premium comfort and style,our meticulously crafted
      footwear is designed to elevate your experience,
      providing you with unmatched quality,innovtion, and touch of elegance
   
    </p>
    <p className="mt-4 info-text lg:max-w-lg">Our detication to details and excellence ensures your satisfaction</p>
    <div className="mt-11">
    <Button label="View Details" iconURL={arrowRight}/>
      </div>   
    </div>
    <div className="flex flex-1 justify-center items-center">
      <img src={shoe8} alt="supershoe" width={570} height={522} className="object-contain" />

    </div>
 
  </section>
  )
}

export default SuperQuality