import { classNames } from "../../../utils/classNames";
import { ISkeletonTextProps } from "../types";

const Image = ({ type = "normal", className = "" }: ISkeletonTextProps) => {
  return (
    <div
      className={classNames(
        "rounded-lg h-16 w-16 ",
        type === "bold" ? "bg-gray-500" : "bg-gray-400",
        className
      )}
    ></div>
  );
};

export { Image };
