'use client';

import clsx from 'clsx';

type buttonProps = {
  type?: 'button' | 'submit' | 'reset';
  text: string | React.ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
};

const Button = ({ type, text, onClick, actionButton }: buttonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={clsx(
          actionButton && 'bg-orange-700 rounded-full p-2 text-white',
          'bg-orange-700 px-2 text-white'
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
