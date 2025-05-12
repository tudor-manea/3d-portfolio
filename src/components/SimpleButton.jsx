import React from 'react';

const SimpleButton = ({
  as = 'button',
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  variant = 'primary', // 'primary', 'secondary', 'outline'
  disabled = false,
  type = 'button', // for <button> element
}) => {
  const baseStyles = "font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 inline-flex items-center justify-center";
  
  let variantStyles = '';
  if (variant === 'primary') {
    variantStyles = "bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500";
  } else if (variant === 'secondary') {
    variantStyles = "bg-gray-700 hover:bg-gray-600 text-white focus:ring-gray-500";
  } else if (variant === 'outline') {
    variantStyles = "border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white focus:ring-purple-400";
  }

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const combinedClassName = `${baseStyles} ${variantStyles} ${disabledStyles} ${className}`;

  if (as === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
        className={combinedClassName}
        onClick={onClick} // Allow onClick for anchor tags too
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SimpleButton;