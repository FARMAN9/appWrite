import React from "react";

const Select = ({ options, label, className, ...props }) => {
  return <div className="w-full">
    {label && <label htmlFor={id}></label>}
    <select
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>

    {props.error && <div className="text-red-500">{props.error}</div>}

    {props.success && <div className="text-green-500">{props.success}</div>}

    {props.isLoading && <div className="text-gray-400">Loading...</div>}

    {props.helperText && <p
  </div>;
};

export default Select;
