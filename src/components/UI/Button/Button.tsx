interface ButtonProps {
  size: "sm" | "md" | "lg";
  children: JSX.Element | string;
  onClick?: () => void;
  additionalClasses?: string;
}

const Button: React.FC<ButtonProps> = ({ size, children, onClick, additionalClasses }: ButtonProps) => {
  let additionalStyles: string;
  switch (size) {
    case "sm":
      additionalStyles = " text-sm px-4 py-2";
      break;
    case "md":
      additionalStyles = " text-md px-8 py-4";
      break;
    case "lg":
      additionalStyles = " text-lg px-12 py-6"
  }
  return (
    <button className={"bg-sky-400 text-sky-100 font-bold rounded-md" + additionalStyles + " " + additionalClasses} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;