import { useForm } from "react-hook-form";
import useSignUpHandler from "./query/useSignUpHandler";
import { useRouter } from "next/router";
import { useState } from "react";

function useSignUp() {
    const [email, setEmail] = useState<any>()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { mutate: signUpHandler, error } = useSignUpHandler(onSuccessSingUp, onErrorSignUp)
    const onSubmit = (data: any) => {
        signUpHandler(data)
        setEmail(data.email)
    };
    const router = useRouter();
    function onSuccessSingUp() {
        router.push(`/confirm-signup?email=${encodeURIComponent(email)}`);
    }
    function onErrorSignUp(error: any) {
        const errorMsg = error.response.data.detail[0].msg
        if (!errorMsg) {
            console.log(error.response.data.detail)
        } else {
            console.log(errorMsg)
        }
    }
    return { errors, register, handleSubmit, onSubmit }
}
export default useSignUp