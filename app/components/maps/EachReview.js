import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

//components
import FullContent from './Eachreviewchildren/FullContent';
//others
import styles from './EachReview.module.scss';


export const ReviewPropsContext = createContext();

export default function EachReview(props) {
  const [reviewopen, setReviewOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);

  const handleReview = () => {
    setReviewOpen(!reviewopen);
    setEditOpen(false);
  }
  const reviewvalue = {
    review: {
      id: props.id,
      reason: props.reason,
      duration: props.duration,
      food: props.food,
      convenient: props.convenient,
      favorite: props.favorite,
      score: props.score,
      advice: props.advice,
      //ここから位置情報
      lat: props.lat,
      lng: props.lng,
    }
  }

  return (
    <ReviewPropsContext.Provider value={reviewvalue}>
      <div className={styles.eachreview} onClick={handleReview} styles={{ zIndex: '1' }}>
        <>
          {reviewopen && (
            <FullContent
              handleReview={handleReview}
            />
          )}
        </>
      </div>
    </ReviewPropsContext.Provider>
  )
}
EachReview.propTypes = {
  id: PropTypes.number,
  reason: PropTypes.string,
  duration: PropTypes.number,
  food: PropTypes.string,
  convenient: PropTypes.string,
  favorite: PropTypes.string,
  score: PropTypes.number,
  advice: PropTypes.string,
  address: PropTypes.string,
  // user関連
  User: PropTypes.number,
  //位置情報
  lat: PropTypes.number,
  lng: PropTypes.number,
  //関数その他
  $hover: PropTypes.bool,
}
