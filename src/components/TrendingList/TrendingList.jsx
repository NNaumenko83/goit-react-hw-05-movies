import React from 'react';

// import styles from './TrendingList.module.css';
import TrendingItem from 'components/TrendingItem/TrendingItem';

const TrendingList = ({ movies }) => {
  return movies.map(({ id, title }) => (
    <TrendingItem key={id} id={id} title={title} />
  ));
};

export default TrendingList;
