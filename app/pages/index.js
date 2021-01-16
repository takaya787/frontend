import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Signup from '../components/Signup'
import Auth from '../modules/auth';
//contexts
import { UserContext, LoginContext } from './_app';

export const baseUrl = "http://localhost:3000/api/users";

export default function Home(props) {
  const { user, setUser } = useContext(UserContext);
  const { login, setLogin } = useContext(LoginContext);

  const Logout = () => {
    //LoginContextから受け取ってるか確認
    Auth.logout();
    setLogin(false);
    setUser({ email: '', id: 0 })
    //LoginContextから受け取ってるか確認
  }
  return (
    <div>
      <h1>Home</h1>
      <Link href='/users'>
        <a>Users</a>
      </Link>
      {login && (
        <>
          <h3>You are logined</h3>
          <p>Your id is {user.id}</p>
          <button onClick={Logout}>Log out</button>
        </>
      )}
      {!login && (
        <>
          <h2>Sign up</h2>
          <Signup title='Sign up' />
        </>
      )}
    </div>
  )
}

// export async function getStaticProps() {
//   // const { Staticdata } = useSWR(baseUrl, fetcher)
//   // return {
//   //   props: {
//   //     posts: Staticdata
//   //   },
//   // };
// }
