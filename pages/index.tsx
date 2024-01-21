import useReplaceAuth from "@/hook/main/useReplaceAuth";
import { getAllData } from "@/servers/books";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  useReplaceAuth();
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ["get-all-data"],
    queryFn: getAllData,
  });
  console.log({data});
  
  return (
    <>
      <h1>home</h1>
    </>
  );
}
