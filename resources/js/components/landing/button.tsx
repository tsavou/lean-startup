import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent';
    className?: string;
    onClick?: () => void;
}

export const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
}: ButtonProps) => {
    const baseStyle =
        'cursor-pointer px-6 py-3 rounded-full font-bold transition-all duration-200 border-2 border-black flex items-center justify-center';
    const variants = {
        primary: 'bg-black text-white hover:bg-[#333]',
        secondary: 'bg-white text-black hover:bg-[#DCECD7]',
        accent: 'bg-[#DCECD7] text-black hover:brightness-95',
    };
    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
