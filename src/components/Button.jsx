



const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullwidth}) => {
  return (
    <button className={` flex justify-center item-centerm gap-2 px-7
     py-4  border font-montserrat text-lg leading-none

     ${
      backgroundColor
      ?`${backgroundColor} ${textColor} ${borderColor}`
      :"bg-coral-red text-white border-coral-red"
     } rounded-full ${fullwidth &&'w-full'}"}`}>
        {label}
       {iconURL && <img src={iconURL} alt="arrowright" className="ml-10 w-5 h-5 rounded-full" />}
      
    </button>
  )
}

export default Button