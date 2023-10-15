"use client";
import React, { useState, useEffect } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  const [emailText, setEmailText] = useState(false);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailText(e.target.value.length > 0);
  };

  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        onChange={onInputChange}
        placeholder=" "
        type={type}
        className={`
        peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacit-70 disabled:cursor-not-allowed ${
          formatPrice ? "pl-9" : "pl-4"
        } ${errors[id] ? "border-rose-500" : "border-neutral-300"} ${
          errors[id] ? "focus:border-rose-500" : "focus:border-black"
        }`}
      />
      <label
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] ${
          formatPrice ? "left-9" : "left-4"
        } ${
          emailText
            ? "scale-75 -translate-y-4"
            : "peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        } ${errors[id] ? "text-rose-500" : "text-zinc-500"}}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
