import { getAllData } from "@/servers/books";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function about() {
  const { data, isSuccess, isError, isLoading } = useQuery({
    queryKey: ["get-all-data"],
    queryFn: getAllData,
  });
  return <div>about</div>;
}
