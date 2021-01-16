import React, { useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import Signup from '../components/Signup'
export const baseUrl = "http://localhost:3000/api/users";
const fetcher = () => fetch(baseUrl).then(res => res.json());

export default function Home(props) {
  const { data, error } = useSWR(baseUrl, fetcher)

  return (
    <div>
      <h1>Home</h1>
      <Link href='/users'>
        <a>Users</a>
      </Link>
      <h2>Sign up</h2>
      <Signup title='Sign up' signup="http://localhost:3000/api/users" login="http://localhost:3000/api/login" />
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
