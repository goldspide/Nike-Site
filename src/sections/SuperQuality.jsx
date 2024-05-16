import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality </span>
           Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Beyond its commitment to product excellence, Nike is known for its brand ethos and marketing campaigns that promote diversity, inclusivity, and empowerment. The iconic Nike swoosh logo has become synonymous with athletic excellence and the pursuit of personal goals.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">In addition to footwear, Nike offers a wide selection of apparel and accessories for both athletes and casual wearers. </p>
        <div className="mt-11">
            <Button label="View details"/>
        </div>
      </div>
      <div className=" flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />

      </div>

    </section>
  )
}

export default SuperQuality