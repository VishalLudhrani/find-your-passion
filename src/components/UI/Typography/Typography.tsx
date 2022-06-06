interface TypographyProps {
  type: "h1" | "h2" | "h3" | "body1" | "body2";
  children: JSX.Element | string;
  additionalClasses?: string;
}

const Typography: React.FC<TypographyProps> = ({ type, children, additionalClasses }: TypographyProps) => {
  switch (type) {
    case "h1":
      return <p className={"text-5xl md:text-6xl font-bold " + additionalClasses}>{children}</p>;
    case "h2":
      return <p className={"text-4xl md:text-5xl font-bold " + additionalClasses}>{children}</p>;
    case "h3":
      return <p className={"text-3xl md:text-4xl font-bold " + additionalClasses}>{children}</p>;
    case "body1":
      return <p className={"text-md md:text-lg " + additionalClasses}>{children}</p>;
    case "body2":
      return <p className={"text-sm md:text-md " + additionalClasses}>{children}</p>
  }
}

export default Typography;