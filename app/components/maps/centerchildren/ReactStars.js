import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//yarn add react-awesome-stars-rating
import ReactStarsRating from 'react-awesome-stars-rating';

export default function ReactStars(props) {
  const [value, setValue] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);
  const [isEdit, setIsEdit] = useState(true);

  const onChange = (value) => {
    setValue(value);
    setSelectedValue(value);
    // console.log(value);
    //propsで受け取ってなくてもerrorにならいために
    if (props.parentscoreChange) {
      props.parentscoreChange(value);
    }
  }

  useEffect(function () {
    //propsで指定したら初期値や変更の有無を変えれるようにする
    if (props.isEdit === false) {
      setIsEdit(false);
    }
    if (props.value) {
      setValue(props.value);
      setSelectedValue(props.value);
    }
  }, []);

  return (
    <section className="stars">
      <ReactStarsRating
        onChange={onChange}
        // isEdit={isEdit} isEditは結果を見せる時だけfalseにする
        isEdit={isEdit}
        value={value}
        selectedValue={selectedValue}
        size={props.size}
      />
    </section>
  )
}

ReactStars.propTypes = {
  parentscoreChange: PropTypes.func,
  value: PropTypes.number,
  isEdit: PropTypes.bool,
  size: PropTypes.number,
};
