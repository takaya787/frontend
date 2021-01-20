import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Signup from '../components/Signup'
import Auth from '../modules/auth';
//contexts
import { UserContext } from './_app';
import Layout from '../components/Layout';

export default function Home(props) {
  const { user, setUser } = useContext(UserContext);

  const Logout = () => {
    Auth.logout();
    setUser({ email: '', id: 0 })
  }
  return (
    <Layout>
      <Head>
        <title>Map | 住み心地.com</title>
      </Head>
      <div>
        {Auth.isLoggedIn() && (
          <div>
            <h3>You are logined</h3>
            <p>Your id is {user.id}</p>
            <button onClick={Logout}>Log out</button>
          </div>
        )}
        {!Auth.isLoggedIn() && (
          <div>
            <h2>Sign up</h2>
            <Signup title='Sign up' />
          </div>
        )}
      </div>
    </Layout>
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
