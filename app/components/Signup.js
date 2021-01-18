import React, { useState } from "react";
import PropTypes from "prop-types";

import UserForm from './UserForm';
import LoginForm from './LoginForm';
import propTypes from "prop-types";

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
        (<button onClick={Signupcontroll}>{props.title}</button>)
      }
      {/* Sign up用のformが表示される */}
      { isSignup && !isLogin &&
        (<div>
          <button onClick={Closemodal}>閉じる</button>
          <UserForm />
          <button onClick={Logincontroll}>ログインはこちら</button>
        </div>)
      }
      {/* Login用のformが表示される */}
      { !isSignup && isLogin &&
        (<div>
          <button onClick={Closemodal}>閉じる</button>
          <LoginForm />
          <button onClick={Signupcontroll}>サインインはこちら</button>
        </div>)
      }
    </>
  )
}

Signup.propTypes = {
  title: PropTypes.string,
};
