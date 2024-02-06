import { useEffect, useState } from "react";
import { classNames } from "../../utils/classNames";
import { CheckSVG } from "../Icons/CheckSVG";
import { ICheckboxProps } from "./types";

const Checkbox = ({
  checked,
  onClick,
  containerClassName,
  ...rest
}: ICheckboxProps) => {
  const [isChecked, setisChecked] = useState(checked ? checked : false);

  useEffect(() => {
    setisChecked(checked ? checked : false);
  }, [checked]);

  const handleClick = () => {
    onClick && onClick(!isChecked);
    setisChecked(!isChecked);
  };

  return (
    <>
      <div
        className={classNames(
          "flex items-center gap-2",
          rest.disabled === true ? "cursor-default" : "cursor-pointer",
          containerClassName!
        )}
        onClick={() => {
          if (!rest.disabled) {
            handleClick();
          }
        }}
      >
        <input type="checkbox" defaultChecked={isChecked} hidden {...rest} />
        <div>
          <CheckSVG
            className={classNames(
              "w-4 h-4 rounded-sm border-2 border-slate-300",
              isChecked
                ? "border-none p-0.5 bg-primaryBlue fill-white"
                : "fill-transparent bg-white",
              rest.disabled
                ? "border-secondaryFadingSunset cursor-default"
                : "",
              isChecked && rest.disabled
                ? "bg-secondaryFadingSunset border-secondaryFadingSunset"
                : ""
            )}
          />
        </div>
      </div>
    </>
  );
};

export { Checkbox };
