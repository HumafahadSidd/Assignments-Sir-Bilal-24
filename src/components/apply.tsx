import React from 'react';

interface ApplyProps {
  label: string;
}

const Apply: React.FC<ApplyProps> = ({ label }) => {
  return (
    <div>
      <button className='rounded-md bg-white text-2xl px-20 py-4 text-blue-800 shadow-md'>
        {label}
      </button>
    </div>
  );
}

export default Apply;
