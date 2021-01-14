import React, { useState } from 'react';
import useSWR from 'swr';
// import fetch from 'unfetch';
const baseUrl = "http://localhost:3000/api/posts";
const fetcher = () => fetch(baseUrl).then(res => res.json());

export default function Home(props) {
  const { data, error } = useSWR(baseUrl, fetcher)

  return (
    <div>
      <h1>POSTの一覧</h1>
      {error && (
        <p>failed to load</p>
      )}
      {data && (
        <button onClick={() => console.log(data.data)}>data show</button>
      )}
      {data && data.data.map((post) =>
      (<div key={post.id}>
        <p>{post.id}</p>
        <br />
        <p>{post.title}</p>
      </div>
      ))
      }
      {/* {props.posts.map((post) =>
        <>
          <p>{post.id}</p>
          <br />
          <p>{post.title}</p>
        </>
      )} */}
    </div>
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
