import React, { useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import UserForm, { DeleteButton } from '../components/UserForm'

export const baseUrl = "http://localhost:3000/api/users";
const fetcher = () => fetch(baseUrl).then(res => res.json());

export default function Home(props) {
  const { data, error } = useSWR(baseUrl, fetcher)

  return (
    // <div>
    //   <h1>USER一覧</h1>
    //   {error && (
    //     <p>failed to load</p>
    //   )}
    //   {data && (
    //     <button onClick={() => console.log(data)}>data show</button>
    //   )}
    //   {data && data.map((user) =>
    //   (<div key={user.id}>
    //     {user.id}
    //     <br />
    //     {user.name}
    //     <br />
    //     {user.email}
    //     <DeleteButton id={user.id} />
    //   </div>
    //   ))
    //   }
    //   <h1>USERの作成</h1>
    //   <UserForm />
    // </div>
    <div>
      <h1>Home</h1>
      <Link href='/users'>
        <a>Users</a>
      </Link>
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
