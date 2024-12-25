import React from 'react';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div>
      <button className='shadow-md text-2xl px-20 py-4 text-white bg-blue-800'>
        {label}
      </button>
    </div>
  );
}

export default Button;
