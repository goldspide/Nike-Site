import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red"> Customers </span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center ">
        jkd;akl;dkl; akl;dklakl;d klkdlklklkflkslkfsk dl;fks;lkdlf ksl;kfdfdfdfdf dfdfdfdf fdfdf fd
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(
          <ReviewCard key ={review.customerName} imgURL = {review.feedback} customerName= {review.customerName} rating= {review.rating} feedback={review.feedback} {...review} />
        ))}

      </div>
    </section>
  );
};

export default CustomerReviews;
