import React from 'react';

const Card = ({ number, text }) => {
  return (
    <div className="w-full max-w-xs md:max-w-sm h-[220px] bg-white rounded-lg shadow-md px-4 py-6 text-center flex flex-col items-center justify-center">
  <h3 className="text-4xl text-red-600 font-bold">{number}</h3>
  <p className="text-base sm:text-lg text-gray-700 mt-1 px-2 text-center clamp-3">
    {text}
  </p>
</div>

  );
};

export default Card;
