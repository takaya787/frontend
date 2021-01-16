import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { baseUrl } from '../pages/index';
//mutateでkeyを元に更新できる
import { mutate } from 'swr';

export default function UserForm() {
  const { register, handleSubmit, formstate } = useForm();
  const initialerrors = { name: '', email: '', password: '', password_confirmation: '' };

  const { errors, handleError, resetError } = useFormErrors(initialerrors);

  const onSubmit = (value) => {
    // console.log(value.title);
    fetch(baseUrl, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: value.name,
          email: value.email,
          password: value.password,
          password_confirmation: value.password_confirmation
        }
      }),
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        if (data.errors) {
          console.log(data.errors);
          handleError(data.errors);
          return
        }
        // console.log(data.token);
        console.log('User is successfully created');
        localStorage.setItem("token", data.token);
        resetError();
        mutate(baseUrl);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        placeholder="ユーザー名を入力"
        ref={register({ required: 'ユーザー名は必須です' })}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="emailを入力"
        ref={register({ required: 'emailは必須です' })}
      />
      {!errors.email === '' && (
        <p>{errors.email}</p>
      )}
      {errors.email !== '' && (
        <p>Email {errors.email}</p>
      )}
      <br />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="パスワードを入力"
        ref={register({ required: 'passwordは必須です' })}
      />
      {errors.password !== '' && (
        <p>Password {errors.password}</p>
      )}
      <br />
      <label htmlFor="password_confirmation">Password_confirmation</label>
      <input
        id="password_confirmation"
        type="password"
        name="password_confirmation"
        placeholder="確認用にパスワードを入力してください"
        ref={register({ required: 'password_confirmationは必須です' })}
      />
      {errors.password_confirmation !== "" && (
        <p>Password_confirmation {errors.password_confirmation}</p>
      )}
      <input type="submit" />
    </form>
  )
}

export function DeleteButton(props) {
  const handleClick = () => {
    const con = confirm('Userを削除してよろしいですか？');
    if (!con) {
      return
    }
    fetch(baseUrl + '/' + props.id, {
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => {
        // console.log(data);
        mutate(baseUrl);
      });
  }
  return (
    <button onClick={handleClick}>削除</button>
  )
}

//railsのvalidateからerrorを受け取るためのcustom Hook
//formの要素ごとのkeyを設定して、各keyごとにerror messageを追加
function useFormErrors(initialerrors) {
  // const initialerrors = { name: '', email: '', password: '', password_confirmation: '' };
  const [errors, setErrors] = useState(initialerrors);
  const handleError = (data) => {
    let errors_copy = Object.assign({}, initialerrors);
    Object.keys(data).forEach(
      function (key) {
        // console.log(key + ' =  ' + data[key]);
        errors_copy = { ...errors_copy, [key]: data[key][0] };
        setErrors(errors_copy);
      }
    )
  }
  const resetError = () => {
    setErrors(initialerrors);
  }

  return { errors, handleError, resetError }
}
