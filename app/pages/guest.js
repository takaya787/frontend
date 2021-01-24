import Head from 'next/head';
// import Link from 'next/link'
//components
import Layout from '../components/Layout';
import GuestMap from '../components/maps/guestmap'
import Signup from '../components/Signup';
//others
import styles from '../styles/Review.module.scss';

export default function New(props) {
  return (
    <Layout>
      <Head>
        <title>GuestMap | 住み心地.com</title>
      </Head>
      <div>
        <div className={styles.title}>
          <h1 className={styles.title_text}>レビューをチェックしてみよう！</h1>
        </div>
        <div className={styles.description}>
          <p className={styles.description_text}>
            <span className={styles.red}>ユーザー登録</span>をして、レビューを投稿してみよう！
          </p>
          <Signup title='レビューを投稿する！' />
        </div>
        <GuestMap />
      </div>
    </Layout>
  )
}
