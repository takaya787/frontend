import { useForm } from 'react-hook-form';
import { baseUrl } from '../pages/index';
//mutateでkeyを元に更新できる
import { mutate } from 'swr';

export default function PostForm() {
  const { register, errors, handleSubmit, formState } = useForm();

  const onSubmit = (value) => {
    // console.log(value.title);
    fetch(baseUrl, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post: {
          title: value.title
        }
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        mutate(baseUrl);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="title"
        placeholder="postを入力"
        ref={register({ required: 'キーワードを入力してください' })}
      />
      {/* {errors.keyword && errors.keyword.message} */}
      <input type="submit" />
    </form>
  )
}

export function DeleteButton(props) {
  const handleClick = () => {
    fetch(baseUrl + '/' + props.id, {
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => {
        console.log(data);
        mutate(baseUrl);
      });
  }
  return (
    <button onClick={handleClick}>削除</button>
  )
}
