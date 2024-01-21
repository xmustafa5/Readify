import { useForm } from "react-hook-form";
import useSignUpHandler from "./query/useSignUpHandler";
import { useRouter } from "next/router";
import { useState } from "react";

function useSignUp() {
    const [email,setEmail] = useState<any>()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const {mutate: signUpHandler} = useSignUpHandler(onSuccessLogin)
    const onSubmit = (data: any) => {
        signUpHandler(data)
        setEmail(data.email)
    };
    const router = useRouter();
    function onSuccessLogin(){
        router.push(`/confirm-signup?email=${encodeURIComponent(email)}`);

    }
    return {errors, register, handleSubmit, onSubmit }
}
export default useSignUp