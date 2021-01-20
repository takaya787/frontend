import Head from 'next/head';
import Layout from '../../components/Layout';
import Map from '../../components/maps/map'
import Link from 'next/link'
import styles from '../../styles/Review.module.scss';

export default function New(props) {
  return (
    <Layout>
      <Head>
        <title>Map | 住み心地.com</title>
      </Head>
      <div>
        <div className={styles.title}>
          <h1 className={styles.title_text}>レビューを投稿してみよう！</h1>
        </div>
        <div className={styles.description}>
          <p className={styles.description_text}>
            ピンをタッチして、ピンの位置を操作できます
          </p>
        </div>
        <Map />
      </div>
    </Layout>
  )
}
