import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default React.memo((props: InputProps) => {
  const { label, ...rest } = props;
  return (
    <div className="relative rounded-xl w-80">
      <input
        {...rest}
        className="peer block w-full appearance-none rounded-md border-[1px] border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-900 focus:outline-none focus:ring-0"
      />
      <label
        htmlFor="name"
        className="absolute left-3 top-2.5 z-10 origin-[0] -translate-y-2 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-blue-900"
      >
        {label}
      </label>
    </div>
  );
});
