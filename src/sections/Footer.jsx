import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
          <img src={footerLogo} alt="footer-logo"
           width={150} height={46} />
           </a>
           <p className="mt-6 text-base leading-7 text-white font-montserrat sm:max-w-sm">
            Get shoes raedy for the next term at your
            nearest nike store.find your perfect size in store.Get Rewards

           </p>
           <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) =>(
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} />

              </div>
            ))}
           </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link)=>(
                  <li className="text-slate-gray mt-4">
                    <a href="/">{link.name}</a>
                  </li>
                ))}
                

              </ul>


            </div>

          ))}

        </div>
        </div>
        <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
          <p>@copyright and created By vijay</p>
          <p>Terms & conditions</p>

        </div>
        
      

      

    </footer>
  )
}

export default Footer