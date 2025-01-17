import { Checkbox } from "../../../Checkbox";
import { IItemProps, IListItemProps } from "../../types";
const ListItem = ({
  item,
  searchText,
  resultArray,
  setResultArray,
  setSelectedIndex,
  selectedIndex,
}: IListItemProps) => {
  const index = resultArray.findIndex(
    (tmpItem: IItemProps) => tmpItem.id === item.id
  );
  const highlightSearchText = (fullName: string, searchText: string) => {
    const parts = fullName.split(new RegExp(`(${searchText})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchText.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    );
  };

  const onCharacterClicked = (id: number) => {
    setSelectedIndex(index);
    setResultArray((resultArray: any) =>
      resultArray?.map((item: IItemProps) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  return (
    <div
      key={index}
      className={
        "w-full flex flex-row h-18 py-3 flex-shrink-0 items-center border-b-2 pl-3 outline-none"
      }
      style={{
        backgroundColor: index === selectedIndex ? "lightgray" : "",
        cursor: "pointer",
      }}
      onClick={() => onCharacterClicked(item.id)}
    >
      <Checkbox checked={item.isSelected} />
      <div className="ml-3 mr-1.5">
        <img
          alt="rickandmorty"
          src={item.image}
          className="rounded-lg w-16 h-16"
        />
      </div>
      <div className="flex flex-col ml-1.5 text ">
        <span className="text-gray-500 font-semibold text-lg">
          {highlightSearchText(item.name, searchText)}
        </span>
        <span className="text-gray-500">{item.episode} Episodes</span>
      </div>
    </div>
  );
};
export { ListItem };
