import React from 'react';
import Details from '../components/revews/details';
import { ReviewCard as ReviewCardFromReviewsCards } from '../components/revews/reviewsCards';
//import { ReviewCard as ReviewCardFromReviewscards } from '../components/revews/reviewscards'

const Review = () => {
  return (
    <div>
      <div className="md:px-[100px]">
        {/* Use the aliased names */}
        <ReviewCardFromReviewsCards name={''} rating={0} date={''} content={''} />
        {/* <ReviewCardFromReviewscards name={''} rating={0} date={''} content={''} /> */}
        <Details />
      </div>
    </div>
  );
};

export default Review;
