import { classNames } from "../../../../utils/classNames";
import { IconButton } from "../../../IconButton";
import { XMarkSVG } from "../../../Icons/XMarkSVG";
import { ISelectedItemProps } from "../../types";

const SelectedItem = ({ item }: ISelectedItemProps) => {
  return (
    <div className="inline-flex flex-shrink-0 relative justify-between min-w-36 w-auto h-9 ml-3 bg-slate-200 rounded-md items-center pl-2 my-2">
      <span className="w-fit text-gray-600 font-medium text-base ">
        {item.name}
      </span>

      <div className="inline-block w-5 h-5 mx-2">
        <IconButton
          icon={XMarkSVG}
          iconClassName={classNames(
            "w-5 h-5 transition-all duration-200 cursor-pointer",
            "fill-gray-600 hover:fill-removeRed"
          )}
          rotateOnHover={true}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
export { SelectedItem };
