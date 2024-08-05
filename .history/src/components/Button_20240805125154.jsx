import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return <button className={``}></button>;
};

export default Button;
