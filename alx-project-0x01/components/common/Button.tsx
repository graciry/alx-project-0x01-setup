import React from "react";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, styles }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
