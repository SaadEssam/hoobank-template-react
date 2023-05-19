import React from "react";

const Button = ({ props }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient rounded-[10px] py-4 px-6 font-poppins
    text-[18px] font-medium text-primary outline-none ${props}`}
    >
      Get Started
    </button>
  );
};

export default Button;
