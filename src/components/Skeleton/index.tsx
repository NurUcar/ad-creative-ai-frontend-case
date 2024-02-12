import { classNames } from "../../utils/classNames";
import { Checkbox } from "./sub-components/Checkbox";
import { Image } from "./sub-components/Image";
import { Text } from "./sub-components/Text";
import { ISkeletonProps } from "./types";

const Skeleton = ({ className = "", children, ...props }: ISkeletonProps) => {
  return (
    <div
      {...props}
      role={"status"}
      className={classNames(className, "animate-pulse")}
    >
      {children}
    </div>
  );
};

Skeleton.Text = Text;
Skeleton.Checkbox = Checkbox;
Skeleton.Image = Image;

export { Skeleton };
