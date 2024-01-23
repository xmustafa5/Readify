import { Auth } from "@/enums/queryKeys/auth";
import { loginHandler } from "@/servers/auth";
import { useMutation } from "@tanstack/react-query";

function useLoginHandler(onSuccessLogin: any) {
  const { mutate, data } = useMutation({
    mutationKey: [Auth.LOGIN],
    mutationFn: loginHandler,
    onSuccess: onSuccessLogin
  });
  return { mutate, data }
}
export default useLoginHandler