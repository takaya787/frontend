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

  return (
    <Layout>
      <Head>
        <title>Map | 住み心地.com</title>
      </Head>
      <div id='root'>
        <div className="common__pc-only">
          <div className="window">
            <div className="window_title">
            </div>
            <h3 className="window_description">気になる国や街の住み心地を<br />チェック！</h3>
            <h3 className="window_description">海外生活経験がある人は、<br />レビューを登録してみよう！</h3>
            {Auth.isLoggedIn() && (
              <>
                <h2 >Welcome!</h2>
                <p>{user.email}</p>
                <p>{user.name}</p>
                <Link href='/reviews/new'><a>レビューを投稿</a></Link>
              </>
            )}
          </div>
          {!Auth.isLoggedIn() && (
            <div className="guide">
              <h3 className="guide_title"> ゲストとして<br />レビューをチェック！</h3>
              <h3 className="guide_title padding">ユーザー登録して<br />レビューを投稿！</h3>
              <Signup title='初める' />
            </div>
          )}
        </div>
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
