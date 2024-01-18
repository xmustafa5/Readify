import { Auth } from "@/enums/queryKeys/auth";
import { signUpHandler } from "@/servers/auth";
import { useMutation } from "@tanstack/react-query";

function useSignUpHandler(onSuccessLogin:any) {
    const { mutate } = useMutation({
        mutationKey: [Auth.SIGN_UP],
        mutationFn: signUpHandler,
        onSuccess: onSuccessLogin,
    });
    return {
        mutate
    }
}
export default useSignUpHandler