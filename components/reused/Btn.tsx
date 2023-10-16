import React from 'react';

interface ButtonProps {
    type?: string;
    label: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className }) => {
    return (
        <button
            className={`text-2xl font-mono bg-black text-white p-2 px-3 rounded-full active:scale-[0.9] ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;
