import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
   
    <h2 className=" font-palanquin text-4xl capitalize lg:max-w-lg
     font-bold">
     
      <span className="text-coral-red ml-2">
        Special
        </span> Offer
    </h2>
    <p className="mt-4 lg:max-w-lg info-text ">
      Embark on a shopping journey that
      redefines your experience with unbeatable deals.From premier selections
      to increadable savings,we offer unparalled value that set us apart
    </p>
    <p className="mt-4 info-text lg:max-w-lg">
      navigate realme of possibillities designd to fullfill
      our unique desires,surpassing the loftiest expectations.
      your journey with us is nothing short of expectational.
      
      </p>
    <div className="mt-11 flex flex-wrap gap-4">
    <Button label="Shop Now" iconURL={arrowRight}/>










      </div>   
    </div>

    </section>
  )
}

export default SpecialOffer