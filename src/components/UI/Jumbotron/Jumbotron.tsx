import React from "react";

interface JumbotronProps {
  children: JSX.Element;
}

const Jumbotron: React.FC<JumbotronProps> = ({ children }: JumbotronProps) => {
  return (
    <div className="mx-auto container py-16 px-8">
      <div>
        {children}
      </div>
    </div>
  )
}

export default Jumbotron;