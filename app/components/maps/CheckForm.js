import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Auth from '../../modules/auth';
import { CenterContext, ZoomContext } from './map';

import styles from './CheckForm.module.scss'
//react-iconsをダウンロード
import { SiGooglemaps } from 'react-icons/si';
import { GiMagnifyingGlass } from 'react-icons/gi';

const baseUrl = `${process.env.BASE_URL}reviews/check`

export default function CheckForm() {
  const { register, handleSubmit } = useForm();

  const { center, setCenter } = useContext(CenterContext);
  const { zoom, setZoom } = useContext(ZoomContext);

  const onSubmit = (value) => {
    console.log(value);
    fetch(baseUrl, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Auth.getToken()}`
      },
      body: JSON.stringify({
        keyword: value.keyword
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(data.error);
          return
        }
        // console.log(data);
        setCenter({ lat: data.lat, lng: data.lng });
        setZoom(9.0);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    // useFormはrefを設定しないと値が入力されない

    <div id={styles.check}>
      <form className={styles.check} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.check_icon}>
          <SiGooglemaps size={16} />
        </div>
        <input
          className={styles.check_input}
          id="keyword"
          name="keyword"
          placeholder="場所を入力..."
          ref={register({ required: '入力してください' })}
        />
        <button className={styles.check_submit} type="submit" name="submit"><GiMagnifyingGlass size={16} />
        </button>
      </form>
    </div>
  )
}
