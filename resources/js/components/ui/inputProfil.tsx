import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputProfil = React.forwardRef<HTMLInputElement, InputProps>(({ label, className = '', ...props }, ref) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-bold text-gray-800 mb-2 ml-1">{label}</label>}
      <input
        ref={ref}
        className={`w-full px-4 py-3 rounded-xl border border-gray-800 bg-white placeholder-gray-400 
        transition-all duration-200
        focus:outline-none focus:ring-4 focus:ring-black/10 focus:border-black
        ${className}`}
        {...props}
      />
    </div>
  );
});
InputProfil.displayName = 'InputProfil';

export default InputProfil;
