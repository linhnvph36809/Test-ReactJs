import React from "react";

type ButtonPrimaryProps = {
  propsclassName?: string;
  title: string;
  typeElement: "button" | "a";
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

const ButtonPrimary = ({
  propsclassName = "w-[208.7px]",
  title,
  typeElement = "button",
  ...props
}: ButtonPrimaryProps) => {
  const className = `lg:h-[59.63px] bg-primary flex justify-center text-white items-center gap-x-[20px] rounded-[50px]
  font-bold md:text-base px-4 font-button hover:bg-[#9059db] transtion-all ${propsclassName}`;
  const Element = typeElement;
  return (
    <Element className={className} {...props}>
      {title}
    </Element>
  );
};

export default ButtonPrimary;
