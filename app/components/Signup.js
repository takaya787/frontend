import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from './Signup.module.scss';
//components
import UserForm from './headers/UserForm';
import LoginForm from './headers/LoginForm';

export default function Signup(props) {
  const [isSignup, setIsSignup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const Closemodal = () => {
    setIsSignup(false);
    setIsLogin(false);
  }
  const Signupcontroll = () => {
    setIsSignup(!isSignup);
    setIsLogin(false);
  }
  const Logincontroll = () => {
    setIsSignup(false);
    setIsLogin(!isLogin);
  }
  return (
    <>{/* 始めはボタンが表示される */}
      { !isSignup && !isLogin &&
        (<button onClick={Signupcontroll} className={styles.initial}>{props.title}</button>)
      }
      {/* Sign up用のformが表示される */}
      { isSignup && !isLogin &&
        (<div className={styles.modal}>
          <div className={styles.content}>
            <button className={styles.content_close} onClick={Closemodal}>×</button>
            <h2 className={styles.content_title}>まずはユーザー登録！</h2>
            <UserForm />
            <button className={styles.content_switch} onClick={Logincontroll}>ログインはこちら</button>
          </div>
        </div>)
      }
      {/* Login用のformが表示される */}
      { !isSignup && isLogin && (
        <div className={styles.modal}>
          <div className={styles.content}>
            <button className={styles.content_close} onClick={Closemodal}>×</button>
            <h2 className={styles.content_title}>Log inはこちら！</h2>
            <LoginForm />
            <button className={styles.content_switch} onClick={Signupcontroll}>ユーザー登録はこちら</button>
          </div>
        </div>
      )}
    </>
  )
}

Signup.propTypes = {
  title: PropTypes.string,
};
