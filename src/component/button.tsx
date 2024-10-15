interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, type, ...props }) => {
  return (
    <button className="button" type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
