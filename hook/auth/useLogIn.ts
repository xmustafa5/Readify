import { useForm } from "react-hook-form";
import useLoginHandler from "./query/useLogInHandler";
import { useEffect } from "react";
import  Cookies  from 'js-cookie';
import { useRouter } from "next/router";

function useLogIn(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {mutate:loginHandler,data} = useLoginHandler(onSuccessLogin)
  const token = data?.token?.access
  if(token){
    Cookies.set('token', token, { expires: 7, secure: true });
  }
  const router = useRouter();
  const tokens = Cookies.get('token');

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
    }
  }, []);
  
function onSuccessLogin(){
  router.replace('/')
  console.log("success");
  
} 
  const onSubmit = (data: any) => {
    loginHandler(data)
  };
  return{tokens, onSubmit,handleSubmit,register,errors}
}
export default useLogIn