import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Nike products are distinguished by their modern and innovative design,
          as well as their commitment to performance, comfort, and durability.
          The range of Nike products is extensive and includes sports shoes for
          various disciplines such as running, basketball, football, tennis, and
          many more. Nike shoes are designed with advanced technologies to
          provide optimal support, shock absorption, and cushioning to enhance
          athletic performance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Whether you're a professional athlete or someone who embraces an
          active lifestyle, Nike offers a range of products that combine style
          and performance to help you reach your full potential.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
