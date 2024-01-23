import { useForm } from "react-hook-form";
import useLoginHandler from "./query/useLogInHandler";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";

function useLogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: loginHandler, data } = useLoginHandler(onSuccessLogin)
  const token = data?.token?.access
  if (token) {
    Cookies.set('token', token);
  }
  const router = useRouter();
  const tokens = Cookies.get('token');

  function onSuccessLogin() {
    router.replace('/')
  }
  const onSubmit = (data: any) => {
    loginHandler(data)
  };
  return { tokens, onSubmit, handleSubmit, register, errors }
}
export default useLogIn