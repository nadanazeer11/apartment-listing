"use client";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  type?: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  as?: "input" | "textarea";
};

const FormInput = ({
  type = "text",
  placeholder,
  register,
  error,
  as = "input",
}: Props) => {
  const baseClass = "w-full border px-3 py-2 rounded";

  return (
    <div>
      {as === "textarea" ? (
        <textarea
          {...register}
          placeholder={placeholder}
          className={baseClass}
        />
      ) : (
        <input
          type={type}
          {...register}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};

export default FormInput;
