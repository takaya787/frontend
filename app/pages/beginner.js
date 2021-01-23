import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
//components関連
import Auth from '../modules/auth';
import Layout from '../components/Layout';
import Signup from '../components/Signup';
import styles from '../styles/Beginner.module.scss';

export default function Beginner(props) {

  return (
    <Layout>
      <Head>
        <title>How to use | 住み心地.com</title>
      </Head>
      <div id={styles.beginner}>
        <div className={styles.title}>
          <h1 className={styles.title_main}>初めて<a href="#"><span className={styles.keyword}>住み心地.com</span></a>を<br className="common__sp-only" />ご覧頂く方へ</h1>
          <h3 className={styles.title_text}>ここでは<span className={styles.keyword}>住み心地.com</span>の<br />ご利用方法を解説させて頂きます。
        </h3>
        </div>
        <div id={styles.index}>
          <h3 className={styles.index_title}>【目次】</h3>
          <ul className={styles.index_lists}>
            <a className={styles.hover} href='#what'><li className={styles.list}>1. <span className={styles.keyword}>住み心地.com</span>とは?</li></a>
            <a className={styles.hover} href='#how'><li className={styles.list}>2. レビューを投稿をしよう！</li></a>
          </ul>
        </div>
        <div id='what'>
          <div id={styles.what}>
            <h2 className={styles.title}><span className={styles.keyword}>住み心地.com</span>は、<br className="common__sp-only" /> 気になる国や地域の<br className="common__sp-only" />生活経験のレビューを見て、<br />移住や留学先の選択や、<br className="common__sp-only" />出発の準備に役立てもらう<br className="common__sp-only" />ためのサービスです。
          </h2>
            <div className={styles.image}>
              <Image src='/images/home_photo.png' alt='image' height={590} width={800} />
            </div>
          </div>
        </div>
        <div id='how'>
          <div id={styles.how}>
            <div className={styles.title}>
              <h2>レビューを投稿をしよう！</h2>
              <p>レビューを投稿する方法を簡単に説明します。</p>
            </div>
            <div className={styles.explain}>
              <div className={styles.explain_title}>
                <h2>STEP1 アカウントを作成しよう！</h2>
              </div>
              <div className={styles.explain_text}>
                <p>まずはじめるをクリックしてユーザー登録を行ってください。</p>
              </div>
            </div>
            <div className={styles.explain}>
              <div className={styles.explain_title}>
                <h2>STEP2 Mapページを開く</h2>
              </div>
              <div className={styles.explain_text} >
                <p><span className={styles.bold}>右上にあるボタン</span>をクリックしてから<span className={styles.bold}>Map</span>をクリックするか、<br /><span className={styles.bold}>このページの最後</span>の<span className={styles.bold} >レビューを投稿する</span>をクリックすると、<br />
                地図が表示されたページに遷移します.</p>
                <div className={styles.image}>
                  <Image src='/images/map_photo.png' width={800} height={600} />
                </div>
                <p className={styles.bold}>※この写真はMap pageの見本です。</p>
              </div>
            </div>
            <div className={styles.explain}>
              <div className={styles.explain_title}>
                <h2>STEP3 検索フォームに場所を入力</h2>
              </div>
              <div className={styles.explain_text}>
                <p>検索フォームに地名や国を入力して、虫眼鏡アイコンを押すと地図が変化します</p>
              </div>
            </div>
            <div className={styles.explain}>
              <div className={styles.explain_title}>
                <h2>STEP4 メニューを表示</h2>
                <div className={styles.explain_text}>
                  <p>地図の中心に表示されている赤いピンをクリックしてメニューを表示させてください。</p>
                  <div className={styles.image}>
                    <Image src='/images/click_menu.png' width={800} height={600} />
                  </div>
                  <p className={styles.bold}>メニューから、ピンを移動させたり、レビューを投稿したりできます。</p>
                </div>
              </div>
            </div>
            <div className={styles.explain}>
              <div className={styles.explain_title}>
                <h2>LAST STEP レビューを投稿</h2>
                <div className={styles.explain_text}>
                  <p>任意の場所にピンを移動させた後、<span className={styles.bold}>この場所に投稿 </span>をタッチすると、投稿フォームが表示されます。</p>
                  <div className={styles.small}>
                    <Image src='/images/review_form.png' alt='review_form' width={450} height={600} />
                  </div>
                  <p>フォーム内容入力後に<span className={styles.bold}>投稿を送信</span>をクリックして、投稿完了です。</p>
                  {Auth.isLoggedIn() ? (
                    // <Link href='/reviews/new'>
                    //   <a>レビューを投稿する</a>
                    // </Link>
                    <></>
                  ) : (
                      <Signup title='reviewを投稿する'
                      />
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
