import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl text-bold font-palanquin">Sign Up from <span className="text-coral-red">Updates</span> & Newsletter
    
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col
      gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Subscribe@nike.com"
        className="input" />
        <div className="max-sm:justify-end items-center max-sm:w-full">
          <Button label="sign up" fullwidth/>
        </div>

      </div>

    </section>
  )
}

export default Subscribe