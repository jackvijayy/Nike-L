

const Shoecard = ({imgURL,changeBigshoeImage,bigShoeImg}) => {

   const handleclick=()=>{
    if(bigShoeImg !== imgURL.bigShoe){
      changeBigshoeImage(imgURL.bigShoe)
    }
   }
  return (
    <div className={`border-2
     rounded-xl
     ${bigShoeImg === imgURL.bigShoe
      ?'border-coral-red border-2'
      :'border-transparent'
     }cursor-pointer max-sm:flex-1
     
     `} onClick={handleclick}> 
     <div className="flex justify-center items-center bg-center bg-card bg-cover sm:h-40 rounded-xl max-sm:p-4">
      <img src={imgURL.thumbnail} 
      alt="shoe-collectiom"
      width={127}
      height={103}
      className="object-contain" />
     </div>

    </div>
  )
}

export default Shoecard 