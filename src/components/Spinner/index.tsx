import { Oval } from "react-loader-spinner";
import { classNames } from "../../utils/classNames";

export interface ISpinnerLoaderProps {
  width?: number;
  height?: number;
  className?: string;
}

const Spinner = ({
  height = 50,
  width = 50,
  className = "",
}: ISpinnerLoaderProps) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-center h-[200px] my-10",
        className
      )}
    >
      <Oval
        width={width}
        height={height}
        color="#4CA7D4"
        secondaryColor="#E5F7FF"
      />
    </div>
  );
};

export { Spinner };
