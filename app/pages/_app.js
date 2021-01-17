import '../styles/globals.css'
import { useState, useEffect, createContext } from 'react';
import Auth from '../modules/auth';

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ email: '', id: 0 })
  const Uservalue = {
    user,
    setUser,
  };

  // useEffect(function () {

  //   Auth.getToken(null);
  // },[])
  useEffect(function () {
    const token = Auth.getToken();
    if (user.id === 0 && token) {
      fetch('http://localhost:3000/api/auto_login', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log('dataを表示')
          console.log(data) // {id: 1, email: "test@example.com"}
          const user_data = data.user
          setUser({ email: user_data.email, id: user_data.id });
        })
    }
  }, []); // [] => changed to => [user]

  return (
    <UserContext.Provider value={Uservalue}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
