import { Auth } from "@/enums/queryKeys/auth";
import { signUpHandler } from "@/servers/auth";
import { useMutation } from "@tanstack/react-query";

function useSignUpHandler(onSuccessSingUp:any,onErrorSignUp:any) {
    const { mutate ,error } = useMutation({
        mutationKey: [Auth.SIGN_UP],
        mutationFn: signUpHandler,
        onSuccess: onSuccessSingUp,
        onError:onErrorSignUp
    });
    return {
        mutate,
        error
    }
}
export default useSignUpHandler