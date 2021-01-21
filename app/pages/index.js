import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
//contexts
import { UserContext } from './_app';
import Layout from '../components/Layout';
import Signup from '../components/Signup';
import Auth from '../modules/auth';
import styles from '../styles/root.module.scss';

export default function Home(props) {
  const { user } = useContext(UserContext);

  return (
    <Layout home>
      <Head>
        <title>Map | 住み心地.com</title>
      </Head>
      <div id={styles.root}>
        <div className="common__pc-only">
          <Image className={styles.image} src='/images/home_photo.png' alt="Main image" layout='fill' />
          <div className={styles.window}>
            <div className={styles.window_title}><Image src='/images/logo.png' alt="Logo" height='50'
              width='250'
            />
            </div>
            <h3 className={styles.window_description}>気になる国や街の住み心地を<br />チェック！</h3>
            <h3 className={styles.window_description}>海外生活経験がある人は、<br />レビューを登録してみよう！</h3>
            {Auth.isLoggedIn() && (
              <h3 className={styles.window_description}>Welcome<br />{user.name}</h3>
            )}
          </div>
          {!Auth.isLoggedIn() && (
            <div className={styles.guide}>
              <h3 className={styles.guide_title}> ゲストとして<br />レビューをチェック！</h3>
              <h3 className={styles.guide_title}>ユーザー登録して<br />レビューを投稿！</h3>
              <Signup title='レビューを投稿する' />
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
