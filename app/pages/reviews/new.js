import Head from 'next/head';
import Layout from '../../components/Layout';
import Map from '../../components/maps/map'
import Link from 'next/link'

export default function New(props) {
  return (
    <Layout>
      <Head>
        <title>Map | 住み心地.com</title>
      </Head>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Map />
      </div>
    </Layout>
  )
}
