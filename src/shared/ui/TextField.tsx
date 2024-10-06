import React from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
        <input
          className={`shadow appearance-none border ${
            error ? "border-red-500" : ""
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          ref={ref} 
          {...props} 
        />
        {error && (
          <p className="text-red-500 text-xs italic mt-2">{error}</p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";
