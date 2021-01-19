import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';

import UserForm, { DeleteButton } from '../../components/UserForm'
export const baseUrl = "http://localhost:3000/api/users";
const fetcher = () => fetch(baseUrl).then(res => res.json());

export default function index(props) {
  const { data, error } = useSWR(baseUrl, fetcher)

  return (
    <Layout>
      <Head>
        <title>User | 住み心地.com</title>
      </Head>
      <div>
        <Link href='/'>
          <a href="/"> Home</a>
        </Link>
        <h1>USER一覧</h1>
        {
          error && (
            <p>failed to load</p>
          )
        }
        {
          data && data.map((user) =>
          (<div key={user.id}>
            {user.id}
            <br />
            {user.name}
            <br />
            {user.email}
            <DeleteButton id={user.id} />
          </div>
          ))
        }
        <h1>USERの作成</h1>
        <UserForm />
      </div >
    </Layout>
  )
}
