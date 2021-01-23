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
        <title>住み心地.com</title>
      </Head>
      <div id={styles.root}>
        {/* pc用　デザイン*/}
        <div className="common__pc-only">
          <div className={styles.image}>
            <Image src='/images/home_photo.png' alt="Main image" height='900'
              width='1300' />
          </div>
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
        {/* sp用　デザイン*/}
        <div className='common__sp-only'>
          <Image className={styles.image} src='/images/home_photo_sp.png' alt="Main image" height='950' width='770' />
          <div className={styles.window}>
            <div className={styles.window_title}><Image src='/images/logo.png' alt="Logo" height='50'
              width='250'
            />
            </div>
            <h3 className={styles.window_description}>気になる国や街の<br />住み心地をチェック！</h3>
            <h3 className={styles.window_description}>海外生活経験がある人は、レビューを<br />登録してみよう！</h3>
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

        {/* main part starts*/}
        <div className={styles.main}>
          <div className={styles.main_icon}>
            <Image src='/images/home_icon.png'
              alt="under arrow"
              width='50' height='50'
            />
          </div>
          <Link href="">
            <a><h1 className={styles.main_question}><span><Image src='/images/logo.png' width='270' height='50' /></span>ってどんなサービス？</h1></a>
          </Link>
          <div className={styles.main_explains}>
            <div className={styles.explain}>
              <h2 className={styles.explain_title}>現地の生活経験を<br />場所毎に住み心地などの評価と共に投稿しよう！</h2>
              <p className={styles.explain_text}>ユーザーが自分自身の生活経験を通して、感じたその土地の生活へのレビューを<br /><span className={styles.explain_text_keyword}>住み心地</span>という評価とともに投稿できるサービスです。</p>
            </div>
            <div className={styles.explain}>
              <h2 className={styles.explain_title}>興味のある国や街を<br />検索して投稿を見てみよう！
              </h2>
              <p className={styles.explain_text}>行きたい国や留学してみたい国や街を選ぶ時に<br className="common__sp-only" />経験者の投稿を見て参考にしてみよう！</p>
            </div>
          </div>
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
