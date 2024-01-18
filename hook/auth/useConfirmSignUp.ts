import { useForm } from "react-hook-form";
import useSignUpHandler from "./query/useSignUpHandler";
import { useRouter } from "next/router";
import useConfirmHandler from "./query/useConfirmHandler";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function useConfirmSignUp() {
    const { get } = useSearchParams();
    const emailFromUrl = get("email");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { mutate: signUpHandler, data } = useConfirmHandler(onSuccessConfirm)
    const onSubmit = (data: any) => {
        signUpHandler({ data, emailFromUrl })
    };
    const token = data?.token?.access
        if (token) {    
            localStorage.setItem('token', token);
         }

    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          router.replace('/'); 
        }
      }, []);
    function onSuccessConfirm() {
        console.log("confirm done");
    }
    return { errors, register, handleSubmit, onSubmit }
}
export default useConfirmSignUp