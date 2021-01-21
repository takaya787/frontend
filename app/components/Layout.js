import styles from './Layout.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
//components
import HeaderMenu from './headers/HeaderMenu';
import LoginHeader from './headers/LoginHeader';
import Auth from '../modules/auth';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keyword" content="住み心地,海外経験をシェア" />
        <meta name="description" content="あなたの海外経験を通して感じた住み心地を投稿してみよう！　あなたが気になる街の住み心地をチェック！" />
        {/*-- ogp関連 -- */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="住み心地.com あなたの感じた住み心地を共有しよう！" />
        <meta property="og:description" content="あなたの海外経験を通して感じた住み心地を投稿してみよう！　あなたが気になる街の住み心地をチェック！" />
        <meta property="og:site_name" content="住み心地.com" />
        <meta property="og:image" content="" />
      </Head>
      {!home && (
        <header className={styles.header}>
          <Link href='/'>
            <Image className={styles.header_logo} src='/images/logo.png' alt="Logo" height={35} width={200} />
          </Link>
        </header>
      )}
      {/* haumbuger menu*/}
      {Auth.isLoggedIn() ? (
        <LoginHeader />
      ) : (
          <HeaderMenu />
        )}
      <main className={styles.main}>{children}</main>
    </div>
  )
}
