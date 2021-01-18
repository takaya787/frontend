import React from "react"
import styles from './HoverText.module.scss';

class Hovertext extends React.Component {
  render() {
    return (
      <div id={styles.pop}>
        <div className={styles.text}>
          <p className={styles.sentence}>クリックでメニューを表示！</p>
        </div>
      </div>
    );
  }
}

export default Hovertext
