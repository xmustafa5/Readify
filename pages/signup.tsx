import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useSignUp from "@/hook/auth/useSignUp";
const singUp = () => {
const {handleSubmit,onSubmit,register} = useSignUp()
  return (
    <div className="bg-yellow-200 flex flex-col gap-6 justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex ">
          <h1 className="text-xl font-medium ">sign up</h1>
        </div>
        <div>
          <input
            type="text"
            className="w-[300px] h-10 rounded-md shadow-md border-2 border-gray-600"
            {...register("first_name")}
          />
        </div>
        <div>
          <input
            type="text"
            className="w-[300px] h-10 rounded-md shadow-md border-2 border-gray-600"
            {...register("last_name")}
          />
        </div>
        <div>
          <input
            type="number"
            className="w-[300px] h-10 rounded-md shadow-md border-2 border-gray-600"
            {...register("phone_number")}
          />
        </div>
        <div>
          <input
            type="email"
            className="w-[300px] h-10 rounded-md shadow-md border-2 border-gray-600"
            {...register("email")}
          />
        </div>
        <div>
          <input
            type="text"
            className="w-[300px] h-10 rounded-md shadow-md border-2 border-gray-600"
            {...register("password1")}
          />
        </div>
        <div>
          <input
            type="text"
            className="w-[300px] h-10 rounded-md shadow-md border-2 border-gray-600"
            {...register("password2")}
          />
        </div>
        <button className="bg-green-300 w-24 flex items-center justify-center hover:bg-green-500 uppercase font-medium text-xl p-2 whitespace-nowrap">
          sing Up
        </button>
      </form>
    </div>
  );
};
export default singUp;
