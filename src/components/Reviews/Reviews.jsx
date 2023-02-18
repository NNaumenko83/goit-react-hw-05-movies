import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieAPI';

import ReviewsItem from 'components/ReviewsItem';

// import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const fetchRewiews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        console.log(response);
        setReviews(response);
      } catch (error) {}
    };
    fetchRewiews();
  }, [movieId]);

  return reviews.length > 0 ? (
    reviews.map(({ author, content, id }) => (
      <ReviewsItem key={id} author={author} content={content} />
    ))
  ) : (
    <h1>We donn't have any reviews for this movie</h1>
  );
};

export default Reviews;
