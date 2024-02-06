import { Checkbox } from "../../../Checkbox";
import { IListItemProps } from "../../types";
const ListItem = ({
  name,
  image,
  episode,
  selectedCharatersArray,
  setSelectedCharacters,
}: IListItemProps) => {
  console.log("selectedCharatersArray", selectedCharatersArray);
  return (
    <div className="w-full flex flex-row h-18 py-3 flex-shrink-0 items-center border-b-2 pl-3">
      <Checkbox
        checked={false}
        onClick={() => {
          console.log(name);
          selectedCharatersArray.push(name);
        }}
      />
      <div className="ml-3 mr-1.5">
        <img alt="rickandmorty" src={image} className="rounded-lg w-16 h-16" />
      </div>
      <div className="flex flex-col ml-1.5 text ">
        <span className="text-gray-500 font-semibold text-lg">{name}</span>
        <span className="text-gray-500">{episode} Episodes</span>
      </div>
    </div>
  );
};
export { ListItem };
