// import { useContext } from 'react';
import { useRouter } from 'next/router'
import Auth from './auth';
//contextからlogin stateを取り出してlogin状態に関連するredirectをまとめる

export default function useRedirect() {

  const router = useRouter();

  //Loginしてなかったら、rootにredirect
  const only_login = () => {
    if (!Auth.isLoggedIn()) {
      router.replace("/");
      alert("Login してください");
    }
    return
  }

  return { only_login }
}
