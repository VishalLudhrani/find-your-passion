interface ContainerProps {
  children: JSX.Element;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div className="container mx-auto xl:px-8">
      {children}
    </div>
  )
}

export default Container;