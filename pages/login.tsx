
import useLogIn from "@/hook/auth/useLogIn";
const logIn = () => {
const {handleSubmit,register,onSubmit,errors,tokens} = useLogIn()
  console.log(tokens);
  
  return (
    <div className="bg-yellow-200 flex flex-col gap-6 justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex ">
          <h1 className="text-xl font-medium ">login</h1>
        </div>
        <div>
          <input
            type="text"
            className="w-[300px] h-10 rounded-md shadow-md border-2 border-gray-600"
            {...register("email")}
          />
        </div>
        <div>
          <input
            type="text"
            className="w-[300px] h-10 rounded-md shadow-md border-2 border-gray-600"
            {...register("password")}
          />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}

        <button className="bg-green-300 w-24 flex items-center justify-center hover:bg-green-500 uppercase font-medium text-xl p-2 whitespace-nowrap">
          log IN
        </button>
      </form>
    </div>
  );
};
export default logIn;
