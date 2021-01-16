import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Auth from '../modules/auth'
//contexts
import { UserContext, LoginContext } from '../pages/_app';

const loginUrl = 'http://localhost:3000/api/login';

export default function LoginForm() {
  //_appからcontextsを受け取る
  const { setUser } = useContext(UserContext);
  const { setLogin } = useContext(LoginContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    // console.log(value.title);
    fetch(loginUrl, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: value.email,
        password: value.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          // console.log(data.error);
          alert(data.error);
          return
        }
        console.log("Logined successfully");
        Auth.login(data.token);
        const user_data = data.user
        setUser({ email: user_data.email, id: user_data.id });
        setLogin(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="emailを入力"
        ref={register({ required: 'emailは必須です' })}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="パスワードを入力"
        ref={register({ required: 'passwordは必須です' })}
      />
      <input type="submit" />
    </form>
  )
}
