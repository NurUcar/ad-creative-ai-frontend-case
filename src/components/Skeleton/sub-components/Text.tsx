import { classNames } from "../../../utils/classNames";
import { ISkeletonTextProps } from "../types";

const Text = ({ type = "normal", className = "" }: ISkeletonTextProps) => {
  return (
    <div
      className={classNames(
        "rounded-full h-4 w-full",
        type === "bold" ? "bg-gray-500" : "bg-gray-400",
        className
      )}
    ></div>
  );
};

export { Text };
