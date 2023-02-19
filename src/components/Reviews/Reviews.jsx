import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movieAPI';
import { Bars } from 'react-loader-spinner';
import Error from 'components/Error';

import ReviewsItem from 'components/ReviewsItem';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const fetchRewiews = async () => {
      try {
        const response = await getMovieReviews(movieId);

        setReviews(response);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRewiews();
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <Bars
          height="40"
          width="40"
          color="#280232"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <ReviewsItem key={id} author={author} content={content} />
          ))}
        </ul>
      ) : (
        <h3>We don't have any reviews for this movie</h3>
      )}
      {errorMessage && <Error />}
    </>
  );
};

export default Reviews;
