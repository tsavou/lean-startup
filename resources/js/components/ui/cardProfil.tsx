import React from 'react';

export const CardProfil = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`bg-white p-4 md:p-4 rounded-[30px] shadow-sm border border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export default CardProfil;