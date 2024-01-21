import { useForm } from "react-hook-form";
import useLoginHandler from "./query/useLogInHandler";
import { useEffect, useLayoutEffect } from "react";
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
    Cookies.set('token', token);
  }
  const router = useRouter();
  const tokens = Cookies.get('token');

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      router.replace('/')
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