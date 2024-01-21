import useReplaceAuth from "@/hook/main/useReplaceAuth";
import { getAllData } from "@/servers/books";
import { useQuery } from "@tanstack/react-query";
import  Cookies  from 'js-cookie';

export default function Home() {
  useReplaceAuth();
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ["get-all-data"],
    queryFn: getAllData,
  });
  const logoutHandler =()=>{
    Cookies.remove('token')
  }
  return (
    <>
    <div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
      <h1>home</h1>
    </>
  );
}
