import React, { useState, createContext } from 'react';
import useSWR from 'swr';
//{yarn add google-map-react}をコンテナ内で入力して、packageをダウンロードする必要がある
import GoogleMapReact from 'google-map-react'

//components
import GuestCheckForm from './GuestCheckForm';
// import CenterPin from './CenterPin';
import EachReview from './EachReview';
//others
import styles from './map.module.scss';

export const CenterContext = createContext();
export const ZoomContext = createContext();

const API_KEY = process.env.GOOGLE_API_KEY;

//swrによるdata通信
const baseUrl = process.env.BASE_URL + 'reviews.json';
const fetcher = () => fetch(baseUrl).then(res => res.json());

export default function GuestMap(props) {
  const initialcenter = { lat: 48.856614, lng: 2.3522219 };
  const [guestcenter, setGuestCenter] = useState(initialcenter);
  const CenterValue = { guestcenter, setGuestCenter };

  const [zoom, setZoom] = useState(6.0);
  const ZoomValue = { zoom, setZoom };

  const { data, error } = useSWR(baseUrl, fetcher);

  return (
    <div className={styles.Googlemap}>
      <CenterContext.Provider value={CenterValue}>
        <ZoomContext.Provider value={ZoomValue}>
          <GuestCheckForm />
          <GoogleMapReact
            bootstrapURLKeys={{
              //API_KEYは絶対に直接入力しない　過去のものは変更済み
              key: API_KEY
            }}
            //defaultCenter・defaultZoomは値が固定されるので避けるべき
            center={guestcenter}
            zoom={zoom}
            yesIWantToUseGoogleMapApiInternals
          /* これをonにしたらfull画面ボタンoffになる */
          //defaultOptions={defaultMapOptions}
          >
            {
              error && (
                <p>{error}</p>
              )
            }

            {
              data && data.map((review) =>
              (<EachReview
                key={review.id}
                //reviewの内容
                id={review.id}
                reason={review.reason}
                duration={review.duration}
                food={review.food}
                convenient={review.convenient}
                favorite={review.favorite}
                score={review.score}
                advice={review.advice}
                //ここから位置情報
                lat={review.lat}
                lng={review.lng}
                //その他
                User={review.user_id}
              />
              ))
            }
          </GoogleMapReact>
        </ZoomContext.Provider>
      </CenterContext.Provider>
    </div>
  )
}
