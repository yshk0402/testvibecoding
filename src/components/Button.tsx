import { type ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-500 focus-visible:ring-2 focus-visible:ring-blue-200',
  secondary:
    'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 focus-visible:outline-blue-500 focus-visible:ring-2 focus-visible:ring-blue-200',
};

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', type = 'button', ...props }, ref) => {
    const composedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

    return <button ref={ref} type={type} className={composedClassName} {...props} />;
  },
);

Button.displayName = 'Button';

export { Button };
