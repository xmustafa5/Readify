import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies  from 'js-cookie';

const useReplaceAuth = () => {
    const router = useRouter();
    useEffect(() => {
      const token = Cookies.get('token');
      if (!token) {
        router.replace('/about'); 
      }else{
        router.replace('/'); 
      }
    }, []);
};
export default useReplaceAuth
