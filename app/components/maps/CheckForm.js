import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Auth from '../../modules/auth';
import { CenterContext, ZoomContext } from './map';

const URL = "http://localhost:3000/api/reviews/check";

export default function CheckForm() {
  const { register, handleSubmit } = useForm();

  const { center, setCenter } = useContext(CenterContext);
  const { zoom, setZoom } = useContext(ZoomContext);

  const onSubmit = (value) => {
    console.log(value);
    fetch(URL, {
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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    // useFormはrefを設定しないと値が入力されない
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        id="keyword"
        name="keyword"
        placeholder="場所を入力..."
        ref={register({ required: '入力してください' })}
      />
      <input type="submit" />
    </form>
  )
}
