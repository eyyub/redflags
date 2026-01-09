import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'rounded-xl font-medium transition-all duration-200 cursor-pointer';

  const variantStyles = {
    primary: 'bg-[#C97B7B] text-white hover:bg-[#B56B6B] active:scale-95',
    secondary: 'bg-[#8BA888] text-white hover:bg-[#7A9877] active:scale-95',
    outline: 'border-2 border-[#E8E0D8] text-[#3D3D3D] hover:bg-[#E8E0D8] active:scale-95',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};
