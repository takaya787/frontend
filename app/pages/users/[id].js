import Head from 'next/head';
import useSWR from 'swr';
//components
import Layout from '../../components/Layout';
import { getAllUserIDs } from '../../modules/userStatics';
import styles from '../../styles/User.module.scss';

export default function User(props) {
  const baseUrl = `${process.env.BASE_URL}users/${props.id}`

  const fetcher = () => fetch(baseUrl).then(res => res.json());

  const { data, error } = useSWR(baseUrl, fetcher)

  return (
    <Layout >
      <Head>
        <title>Your profile | 住み心地.com</title>
      </Head>
      <div id={styles.user}>
        <h3> {props.id}</h3>
        {
          error && (
            <p>failed to load</p>
          )
        }
        {
          data && (
            <div className={styles.profile}>
              Your name
              <p className={styles.profile_logo}>{data.name}</p>
              <br />
              Your email
              {data.email}
              <p className={styles.profile_logo}>{data.email}</p>
            </div>
          )
        }
        {
          data && data.reviews.length ? (
            <div className={styles.reviews} >
              <ul className={styles.reviews_lists}>
                {data.reviews.map((review) => (
                  <li className={styles.list} key={review.id}>
                    id: {review.id}
                  duration: {review.duration}
                  reason: {review.reason}
                  </li>
                )
                )}
              </ul>
            </div>
          ) : (
              <><h3>Reviews 0</h3></>
            )
        }
      </div>
    </Layout>
  )
}
//path内のparams要素をparamsとして、propsして、各ページをレンダリングする
export async function getStaticPaths() {
  const paths = await getAllUserIDs();
  // const paths = ['/users/4', '/users/5']
  // console.log(paths);
  return {
    paths,
    fallback: true
  }
}
//path内のparamsをpropしてる
export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id
    }
  }
}
