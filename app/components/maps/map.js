import React, { useState, useEffect, createContext } from 'react';
import useRedirect from '../../modules/useRedirect'

//{yarn add google-map-react}をコンテナ内で入力して、packageをダウンロードする必要がある
import GoogleMapReact from 'google-map-react'

//components
import CheckForm from './CheckForm';
import CenterPin from './CenterPin';
import styles from './map.module.scss';

export const CenterContext = createContext();
export const ZoomContext = createContext();

const API_KEY = process.env.GOOGLE_API_KEY

export default function Map(props) {
  const initialcenter = { lat: 36.204824, lng: 138.252924 };

  const [center, setCenter] = useState(initialcenter);
  const CenterValue = { center, setCenter };

  const [zoom, setZoom] = useState(6.0);
  const ZoomValue = { zoom, setZoom };

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
            />
          </GoogleMapReact>
        </ZoomContext.Provider>
      </CenterContext.Provider>
    </div>
  )
}
