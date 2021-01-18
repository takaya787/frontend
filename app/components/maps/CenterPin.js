import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import styles from './CenterPin.module.scss';
//Child components
import ReviewForm from './centerchildren/ReviewForm';

const markerStyle = {
  height: 20,
  width: 20,
  backgroundColor: 'red',
  cursor: 'pointer'
};
const hoverStyle = {
  height: 20,
  width: 20,
  backgroundColor: 'blue',
  cursor: 'pointer',
};

export default function CenterPin(props) {
  const [menuopen, setMenuOpen] = useState(false);
  const [formopen, setFormOpen] = useState(false);

  const style = props.$hover ? hoverStyle : markerStyle;

  const CloseButton = () => {
    setFormOpen(false);
    setMenuOpen(false);
  }
  return (
    <>
      {!formopen && menuopen && (
        <div>
          <p>menu</p>
          <button onClick={() => {
            setMenuOpen(false);
            setFormOpen(true);
          }}>Form open</button>
        </div>
      )}
      {formopen && !menuopen && (
        <>
          <ReviewForm lat={props.lat} lng={props.lng} CloseButton={CloseButton} />
        </>
      )}
      {!formopen && !menuopen && (
        <div className={styles.marker} style={style} onClick={() => setMenuOpen(true)}>
        </div>
      )}
    </>
  )
}

CenterPin.propTypes = {
  $hover: PropTypes.bool,
  lat: PropTypes.number,
  lng: PropTypes.number,
}
