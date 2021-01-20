import React, { useState, useEffect, createContext } from 'react';
import useSWR from 'swr';
//{yarn add google-map-react}をコンテナ内で入力して、packageをダウンロードする必要がある
import GoogleMapReact from 'google-map-react'

//components
import CheckForm from './CheckForm';
import CenterPin from './CenterPin';
import EachReview from './EachReview';
//others
import styles from './map.module.scss';
import useRedirect from '../../modules/useRedirect';

export const CenterContext = createContext();
export const ZoomContext = createContext();

const API_KEY = process.env.GOOGLE_API_KEY;

//swrによるdata通信
const baseUrl = process.env.BASE_URL + 'reviews.json';
const fetcher = () => fetch(baseUrl).then(res => res.json());

export default function Map(props) {
  const initialcenter = { lat: 36.204824, lng: 138.252924 };
  const [center, setCenter] = useState(initialcenter);
  const CenterValue = { center, setCenter };

  const [zoom, setZoom] = useState(6.0);
  const ZoomValue = { zoom, setZoom };

  const { data, error } = useSWR(baseUrl, fetcher);


  const { only_login } = useRedirect();

  useEffect(function () {
    only_login();
  }, [])

  return (
    <div className={styles.Googlemap}>
      <CenterContext.Provider value={CenterValue}>
        <ZoomContext.Provider value={ZoomValue}>
          <CheckForm />
          <GoogleMapReact
            bootstrapURLKeys={{
              //API_KEYは絶対に直接入力しない　過去のものは変更済み
              key: API_KEY
            }}
            //defaultCenter・defaultZoomは値が固定されるので避けるべき
            center={center}
            zoom={zoom}
            yesIWantToUseGoogleMapApiInternals
          /* これをonにしたらfull画面ボタンoffになる */
          //defaultOptions={defaultMapOptions}
          >
            <CenterPin
              lat={center.lat}
              lng={center.lng}
              center={center}
              setCenter={setCenter}
            />
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
