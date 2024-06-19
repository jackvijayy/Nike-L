import Reviewcard from "../components/Reviewcard"
import { reviews } from "../constants"


const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our  <span className="text-coral-red">Customer</span> say?

        
      </h3>
      <p className="info-text  text-center m-auto mt-4 max-w-lg:text-center">Hear Geniue stories from our Satisfied
        customer about their exceptional experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center  
     gap-14">
        {reviews.map((review)=>(
          <Reviewcard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}

      </div>

    </section>
  )
}

export default CustomerReviews