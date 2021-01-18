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

  const FormControll = () => {
    setFormOpen(!formopen);
    setMenuOpen(false);
  }
  const MenuControll = () => {
    setFormOpen(false);
    setMenuOpen(!menuopen);
  }
  const GoRight = () => {
    let longitude = props.center.lng;
    longitude += 0.05
    props.setCenter({
      lat: props.center.lat, lng: longitude
    });
    console.log({ longitude });
  };

  const GoLeft = () => {
    let longitude = props.center.lng;
    longitude -= 0.05
    props.setCenter({
      lat: props.center.lat, lng: longitude
    });
    console.log({ longitude });
  };

  const GoUp = () => {
    let latitude = props.center.lat;
    latitude += 0.05
    props.setCenter({
      lat: latitude, lng: props.center.lng
    });
    console.log({ latitude });
  };

  const GoDown = () => {
    let latitude = props.center.lat;
    latitude -= 0.05
    props.setCenter({
      lat: latitude, lng: props.center.lng
    });
    console.log({ latitude });
  };
  return (
    <>
      {/*click表示のreview-menuを表示*/}
      {!formopen && menuopen && (
        <div id={styles.center_menu}>
          <div className={styles.menus} >
            <button className={styles.post} onClick={FormControll}>この場所に投稿</button>
            <button className={styles.menu} onClick={GoUp}>上に移動</button>
            <button className={styles.menu} onClick={GoRight}>右に移動</button>
            <button className={`${styles.menu} ${styles.left}`} onClick={GoLeft}>左に移動</button>
            <button className={`${styles.menu} ${styles.down}`} onClick={GoDown}>下に移動</button>
          </div>
        </div>
      )}
      {formopen && !menuopen && (
        <>
          <ReviewForm lat={props.lat} lng={props.lng} CloseButton={CloseButton} />
        </>
      )}
      <div className={styles.marker} style={style} onClick={MenuControll}>
      </div>
    </>
  )
}

CenterPin.propTypes = {
  $hover: PropTypes.bool,
  lat: PropTypes.number,
  lng: PropTypes.number,
  setCenter: PropTypes.func,
  center: PropTypes.object,
}
