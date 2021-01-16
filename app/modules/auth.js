class Auth {
  //localstorageがrailsのsessionに等しい
  static login(token) {
    localStorage.setItem('token', token)
  }

  //tokenがsetされていたらtrueを返す
  static isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  static logout() {
    localStorage.removeItem('token');
  }

  static getToken() {
    return localStorage.getItem('token');
  }
}

export default Auth;
