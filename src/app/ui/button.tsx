import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "mt-4 w-40 bg-red-900 hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition-colors duration-300",
        className,
      )}
    >
      {children}
    </button>
  );
}