import { star } from "../assets/icons"


const Reviewcard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex-justify-center items-center flex-col">
        <img src={imgURL} alt="customer" className="rounded-full  object-cover w-[120px] h-[120px]" />
        <p>{feedback}</p>
        <div className="flex mt-5">
            <img src={star} alt="star" width={24} height={24} className="object-contain m-0" />
            <p >({rating})</p>
        </div>
        <h3 className="mt-5 font-bold text-2xl">{customerName}</h3>
    </div>

  )
}

export default Reviewcard