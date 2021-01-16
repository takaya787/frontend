import '../styles/globals.css'
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ email: '', id: 0 })

  useEffect(function () {
    const token = localStorage.getItem('token')
    // console.log(token);
    // console.log(user.id);
    if (user.id === 0 && token) {
      fetch('http://localhost:3000/api/auto_login', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('dataを表示')
          console.log(data) // {id: 1, email: "test@example.com"}
          const user_data = data.user
          setUser({ email: user_data.email, id: user_data.id })
        })
    }
  }, [user]); // [] => changed to => [user]

  return <Component {...pageProps} />
}

export default MyApp
