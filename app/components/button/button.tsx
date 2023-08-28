import clsx from "clsx";

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    type = "button",
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled,
    className,
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(
                `
        flex 
        justify-center 
        rounded-xl
        px-3 
        py-2 
        text-base
        text-black
        font-medium
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        `,
                disabled && "opacity-50 cursor-default",
                fullWidth && "w-full",
                secondary && "hover:bg-gray",
                // danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
                // !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
