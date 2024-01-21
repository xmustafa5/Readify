import { eyeShowPassword, eyeVisiblePassword } from "@/assets/svg/login";
import { useEffect, useState } from "react";
import { useMemo } from 'react';
import req1 from "../../assets/frames/required/required0001.png";
import req2 from "../../assets/frames/required/required0002.png";
import req3 from "../../assets/frames/required/required0003.png";
import req4 from "../../assets/frames/required/required0004.png";
import req5 from "../../assets/frames/required/required0005.png";
import req6 from "../../assets/frames/required/required0006.png";
import req7 from "../../assets/frames/required/required0007.png";
import req8 from "../../assets/frames/required/required0008.png";
import req9 from "../../assets/frames/required/required0009.png";
import req10 from "../../assets/frames/required/required0010.png";
import req11 from "../../assets/frames/required/required0011.png";
import req12 from "../../assets/frames/required/required0012.png";
import req13 from "../../assets/frames/required/required0013.png";
import req14 from "../../assets/frames/required/required0014.png";
import req15 from "../../assets/frames/required/required0015.png";
import req16 from "../../assets/frames/required/required0016.png";
import req17 from "../../assets/frames/required/required0017.png";
import req18 from "../../assets/frames/required/required0018.png";
import req19 from "../../assets/frames/required/required0019.png";
import req20 from "../../assets/frames/required/required0020.png";
import req21 from "../../assets/frames/required/required0021.png";
import req22 from "../../assets/frames/required/required0022.png";
import req23 from "../../assets/frames/required/required0023.png";

import Image, { StaticImageData } from "next/image";
interface IsProps {
  inputType?: string;
  placeholder?: string;
  name: string;
  register: any;
  onChange?: (e: any) => void;
  showPassword?: boolean;
  pattern?: RegExp;
  required?: boolean;
  errors?: any;
}
const Input = ({
  inputType,
  placeholder,
  name,
  register,
  onChange,
  showPassword,
  pattern,
  required,
  errors,
}: IsProps) => {
  const [statusPassword, setStatusPassword] = useState<string>("");
  const [frameImage, setFrameImage] = useState<StaticImageData>(req1);

  const loadingImages = useMemo(() => [
    req1, req2, req3, req4, req5, req6, req7, req8, req9, req10,
    req11, req12, req13, req14, req15, req16, req17, req18, req19, req20,
    req21, req22, req23
  ], []); 
  function showPasswordHandler() {
    setStatusPassword((prevStatus) =>
      prevStatus === "password" ? "text" : "password"
    );
  }
  function VisibleIconEye(e: any) {
    setStatusPassword(e.target.value ? "password" : "");
  }
 
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (errors) {
      const images =loadingImages
      let currentIndex = 0;
      const updateImage = () => {
        setFrameImage(images[currentIndex]);
        currentIndex = (currentIndex + 1) % images.length;
        if (currentIndex !== 0) {
          timeoutId = setTimeout(updateImage,50);
        }
      };
      updateImage();
    }
    return () => clearTimeout(timeoutId);
  }, [errors,loadingImages]);
  return (
    <div className="relative">
      {showPassword ? (
        <>
          <input
            type={statusPassword}
            placeholder={placeholder || ""}
            className={`w-[350px] h-14 rounded-md shadow-md text-xl pl-2 border-2 ${
              errors
                ? "border-red-400 focus:border-red-400"
                : "border-[#E0C99A] focus:border-[#a9966f]"
            } placeholder:uppercase  focus:outline-none`}
            {...register(`${name}`, {
              pattern: pattern,
              required: required ? "This field is required." : false,
            })}
            onChange={VisibleIconEye}
          />
          <button
            className="absolute top-[33%] right-2 z-50 bg-red-120 w-5"
            onClick={showPasswordHandler}
          >
            {statusPassword === "password" ? (
              <>{eyeShowPassword}</>
            ) : statusPassword === "text" ? (
              <>{eyeVisiblePassword}</>
            ) : null}
          </button>
        </>
      ) : (
        <div className="relative  ">
          <Image
            src={errors ? frameImage:req1}
            alt="Required"
            className="absolute h-auto -left-[128px] -bottom-4 w-[150px] z-10 "
          />
          <input
            type={inputType || `text`}
            placeholder={placeholder || ""}
            className={`w-[350px] h-14 rounded-md shadow-md relative z-50 text-xl pl-2 border-2 ${
              errors
                ? "border-red-400 focus:border-red-400"
                : "border-[#E0C99A] focus:border-[#a9966f]"
            } placeholder:uppercase  focus:outline-none`}
            {...register(`${name}`, {
              pattern: pattern,
              required: required ? "This field is required." : false,
            })}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};
export default Input;
