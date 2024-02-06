import { classNames } from "../../../../utils/classNames";
import { XMarkSVG } from "../../../Icons/XMarkSVG";

const SelectedItem = () => {
  return (
    <div className="min-w-36 w-fit h-9 ml-3 flex-shrink-0 bg-slate-200 rounded-md flex items-center relative pl-2">
      <span className="text-gray-600 font-medium text-base ">Rick Snachez</span>

      <div className="absolute right-2 flex h-full items-center">
        <XMarkSVG
          className={classNames(
            "w-5 h-5  transition-all duration-200",
            "fill-gray-600 hover:fill-removeRed"
          )}
        />
      </div>
    </div>
  );
};
export { SelectedItem };
