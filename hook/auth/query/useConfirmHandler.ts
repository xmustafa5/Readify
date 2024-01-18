import { Auth } from "@/enums/queryKeys/auth";
import { confirmHandler } from "@/servers/auth";
import { useMutation } from "@tanstack/react-query";

function useConfirmHandler(onSuccessConfirm:any) {
    const { mutate,data } = useMutation({
        mutationKey: [Auth.CONFIRM],
        mutationFn: confirmHandler,
        onSuccess: onSuccessConfirm,
    });
    return {
        mutate,data
    }
}
export default useConfirmHandler