import useLogIn from "@/hook/auth/useLogIn";
import Image from "next/image";
import imageLeft from "../assets/left.png";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
const logIn = () => {
  const { handleSubmit, register, onSubmit, errors } = useLogIn();

  return (
    <div className="backgroundCover flex gap-6 justify-center items-center w-full h-screen">
      <div className="relative  w-full h-full">
        <Image
          alt="test"
          src={imageLeft}
          className="w-full h-full rounded-3xl shadow-sm "
        />
        <h1 className=" absolute top-1/2 left-[45%] text-3xl font-medium">
          Readify
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center justify-center gap-6"
      >
        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0, x: "60" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "60" }}
            transition={{ duration: 3 }}
          >
            <div className=" gap-6 flex flex-col">
              <div className="flex justify-center">
                <h1 className="text-2xl font-bold uppercase">login</h1>
              </div>
              <p className="text-base w-full flex text-center justify-center">
                welcome back please login to your account
              </p>
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-[350px] h-16 rounded-md shadow-md text-xl pl-2  border-2 border-[#E0C99A]"
                  {...register("email")}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="PASSWORD"
                  className="w-[350px] h-16 rounded-md shadow-md text-xl pl-2  border-2 border-[#E0C99A]"
                  {...register("password")}
                />
                <p className="text-[#936C1F] justify-start flex mt-2  w-full">
                  Forgot password?
                </p>
              </div>
              <button className="bg-[#F5DEAF] shadow-xl w-full h-16 rounded-md flex items-center justify-center hover:bg-[#c9ad7a] uppercase font-medium text-xl p-2 whitespace-nowrap">
                log IN
              </button>
              <p className="w-full flex justify-center text-md">
                doesn't have ab a count,
                <Link className="text-[#936C1F]" href={"/signup"}>
                  Sign Up
                </Link>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
};
export default logIn;
