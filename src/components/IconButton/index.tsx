import { motion } from "framer-motion";
import { useState } from "react";
import { classNames } from "../../utils/classNames";
import { IIconButtonProps } from "./types";

const IconButton = ({
  icon,
  className,
  iconClassName,
  rotateOnHover = false,
  onClick,
}: IIconButtonProps) => {
  const [isHovered, setisHovered] = useState(false);
  const Icon = icon;
  return (
    <button
      className={classNames("flex items-center", className ? className : "")}
      onClick={(e) => onClick && onClick(e)}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      type="button"
    >
      <motion.div
        animate={{
          rotate: rotateOnHover && isHovered ? 360 : 0,
        }}
      >
        <Icon className={iconClassName ? iconClassName : ""} />
      </motion.div>
    </button>
  );
};

export { IconButton };
