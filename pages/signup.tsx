import useSignUp from "@/hook/auth/useSignUp";
import imageLeft from "../assets/left.png";
import Image from "next/image";
import Input from "../components/form/Input";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent } from "react";
import { handleInputPhoneNumber, handleInputTypeNumber } from "@/utils/functions/InputTypeNamber";

const singUp = () => {
  const { handleSubmit, onSubmit, register ,errors } = useSignUp();
  
  return (
    <div className="backgroundCover flex gap-6 justify-center items-center w-full h-screen">
      <div className="relative w-full h-full">
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
        noValidate
      >
        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0, x: "60" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "60" }}
            transition={{ duration: 0.3 }}
          >
            <div className=" gap-4 flex flex-col">
              <div className="flex justify-center">
                <h1 className="text-2xl font-bold uppercase">Sign up</h1>
              </div>
              <Input
                placeholder="first name"
                name="first_name"
                register={register}
                required
                errors={errors.first_name}
              />
              <Input
                placeholder="last name"
                name="last_name"
                register={register}
                required
                errors={errors.last_name}
              />
              <Input
                placeholder="phone number"
                name="phone_number"
                register={register}
                required
                onChange={handleInputPhoneNumber}
                errors={errors.phone_number}
                />
              <Input
                inputType="email"
                placeholder="email"
                name="email"
                required
                register={register}
                errors={errors.email}

              />
              <Input
                inputType="password"
                placeholder="password"
                name="password1"
                register={register}
                required
                showPassword
                errors={errors.password1}

              />
              <Input
                inputType="password"
                placeholder="Confirm Password"
                name="password2"
                register={register}
                required
                showPassword
                errors={errors.password2}

              />
              <button className="bg-[#F5DEAF] shadow-xl  w-full h-16 rounded-md flex items-center justify-center hover:bg-[#c9ad7a] uppercase font-medium text-xl p-2 whitespace-nowrap">
                sing Up
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
};
export default singUp;
