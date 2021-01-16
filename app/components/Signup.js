import React from "react"
import PropTypes from "prop-types"

// //react-iconsからダウンロード
// import { FcGoogle } from 'react-icons/fc';
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignupOpen: false,
      isLoginOpen: false,
      user_name: '',
      user_email: '',
      user_password: '',
      user_password_confirmation: '',
    };
    this.signupcontroll = this.signupcontroll.bind(this);
    this.logincontroll = this.logincontroll.bind(this);
    this.closemodal = this.closemodal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.event.state)
    event.preventDefault();
  }
  closemodal(event) {
    this.setState({
      isSignupOpen: false,
      isLoginOpen: false,
    });
  }
  signupcontroll(event) {
    this.setState({
      isSignupOpen: !this.state.isSignupOpen,
      isLoginOpen: false,
    });
  }
  logincontroll(event) {
    this.setState({
      isLoginOpen: !this.state.isLoginOpen,
      isSignupOpen: false,
    });
  }
  render() {
    if (this.state.isSignupOpen && !this.state.isLoginOpen) {
      return (
        <div className="modal">
          <form
            id="signup-modal"
            className="form"
            onSubmit={this.handleSubmit}
            action={this.props.signup} acceptCharset="UTF-8" method="post"
          >
            <button className="close" onClick={this.closemodal}>✕</button>
            <h2 className="form_title">まずはユーザー登録!</h2>

            <label htmlFor="user_name">お名前</label>
            <input className="form_input" type="text" name="user[name]" id="user_name" value={this.state.user_name} onChange={this.handleChange} />

            <label htmlFor="user_email">Eメール</label>
            <input className="form_input" type="text" name="user[email]" id="user_email" value={this.state.user_email} onChange={this.handleChange} />
            <label htmlFor="user_password">パスワード</label>
            <input className="form_input" type="password" name="user[password]" id="user_password" value={this.state.user_password} onChange={this.handleChange} />
            <label htmlFor="user_password_confirmation">パスワード確認用</label>
            <input className="form_input" type="password" name="user[password_confirmation]" id="user_password_confirmation" value={this.state.user_password_confirmation} onChange={this.handleChange} />

            <input className="form_submit" type="submit" name="submit" value="登録する" />
            <button className="login" onClick={this.logincontroll}>
              Loginはこちら
            </button>
            {/* <a className="form_google" href="/auth/google_oauth2">
              <FcGoogle size={20} />
              <span className="description" >GoogleアカウントでLog in</span>
            </a> */}
          </form>
        </div>
      );
    }
    else if (this.state.isLoginOpen && !this.state.isSignupOpen) {
      //nameタグだけscopeの都合で変更する必要がある
      return (
        <div className="modal">
          <form
            id="login-modal"
            className="form"
            onSubmit={this.handleSubmit}
            action={this.props.login} acceptCharset="UTF-8" method="post"
          >
            <button className="close" onClick={this.closemodal}>✕</button>
            <h2 className="form_title">Log inはこちら！</h2>

            <label htmlFor="user_email">Eメール</label>
            <input className="form_input" type="text" name="session[email]" id="user_email" value={this.state.user_email} onChange={this.handleChange} />
            <label htmlFor="user_password">パスワード</label>
            <input className="form_input" type="password" name="session[password]" id="user_password" value={this.state.user_password} onChange={this.handleChange} />

            <input className="form_submit" type="submit" name="submit" value="Loginする" />
            <button className="login" onClick={this.signupcontroll}>
              Signupはこちら
            </button>
            {/* <a className="form_google" href="/auth/google_oauth2">
              <FcGoogle size={20} />
              <span className="description" >GoogleアカウントでLogin</span>
            </a> */}
          </form>
        </div>
      );
    }
    else {
      return (
        <button className="initial" onClick={this.signupcontroll}>{this.props.title}</button>
      );
    }
  }
}

Signup.propTypes = {
  signup: PropTypes.string,
  login: PropTypes.string,
  title: PropTypes.string,
};
export default Signup
