import {
  IGetResultArrayProps,
  IGetSelectedCharactersArrayProps,
  IItemProps,
  IListItemKeyDownProps,
  ISelectedItemKeyDownProps,
} from "../types";

export const handleListItemKeyNavigation = ({
  event,
  listItemContainer,
  selectedListItemIndex,
  setSelectedListItemIndex,
  resultArray,
  setResultArray,
}: IListItemKeyDownProps) => {
  const container = listItemContainer.current;

  if (event.key === "ArrowUp") {
    if (listItemContainer.current) container.scrollTop -= 40;
    setSelectedListItemIndex((prevIndex: number) =>
      prevIndex !== null ? Math.max(prevIndex - 1, 0) : 0
    );
  } else if (event.key === "ArrowDown") {
    if (container) container.scrollTop += 40;
    setSelectedListItemIndex((prevIndex: number) =>
      prevIndex !== null ? Math.min(prevIndex + 1, resultArray.length - 1) : 0
    );
  } else if (event.key === "Enter" || event.key === "Tab") {
    setResultArray((resultArray: any) =>
      resultArray?.map((item: IItemProps, itemIndex: number) =>
        itemIndex === selectedListItemIndex
          ? { ...item, isSelected: true }
          : item
      )
    );
  } else if (event.key === "Backspace") {
    setResultArray((resultArray: any) =>
      resultArray?.map((item: IItemProps, itemIndex: number) =>
        itemIndex === selectedListItemIndex
          ? { ...item, isSelected: false }
          : item
      )
    );
  }
};

export const handleSelectedItemKeyNavigation = ({
  event,
  selectedItemIndex,
  setSelectedItemIndex,
  selectedCharaters,
  setResultArray,
}: ISelectedItemKeyDownProps) => {
  if (event.key === "ArrowLeft") {
    setSelectedItemIndex((prevIndex: number) =>
      prevIndex !== null ? Math.max(prevIndex - 1, 0) : 0
    );
  } else if (event.key === "ArrowRight") {
    setSelectedItemIndex((prevIndex: number) =>
      prevIndex !== null
        ? Math.min(prevIndex + 1, selectedCharaters.length - 1)
        : 0
    );
  } else if (event.key === "Backspace") {
    selectedItemIndex &&
      setResultArray((resultArray: any) =>
        resultArray?.map((item: IItemProps) =>
          item.id === selectedCharaters[selectedItemIndex]?.id
            ? { ...item, isSelected: false }
            : item
        )
      );
    setSelectedItemIndex(null);
  }
};

export const getResultArray = ({
  results,
  selectedCharaters,
  resultArray,
  setResultArray,
}: IGetResultArrayProps) => {
  if (results) {
    let tempResultArray: IItemProps[] = [];
    tempResultArray = results?.data?.results?.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        image: item.image,
        episode: item.episode.length,
        isSelected: selectedCharaters?.some(
          (tmpItem: IItemProps) => tmpItem.id === item.id
        ),
      };
    });
    if (tempResultArray?.length > 0)
      resultArray.length > 0
        ? setResultArray((resultArray: any) => [
            ...resultArray,
            ...tempResultArray,
          ])
        : setResultArray(tempResultArray);
  }
};

export const getSelectedCharactersArray = ({
  selectedCharaters,
  resultArray,
  setSelectedCharacters,
  setResultArray,
}: IGetSelectedCharactersArrayProps) => {
  if (selectedCharaters?.length > 0) {
    const tempSelectedCharacters: IItemProps[] = [];
    resultArray.map((sourceItem: IItemProps, index) => {
      const needToAdd = selectedCharaters?.some(
        (targetItem: IItemProps) =>
          sourceItem.id !== targetItem.id && sourceItem.isSelected === true
      );

      const needToRemove = selectedCharaters?.some(
        (targetItem: IItemProps) =>
          sourceItem.id === targetItem.id && sourceItem.isSelected === false
      );

      const isAlreadyIncluded = selectedCharaters?.some(
        (targetItem: IItemProps) => targetItem.id === sourceItem.id
      );
      if (!isAlreadyIncluded && needToAdd) {
        tempSelectedCharacters.push(sourceItem);
      }
      if (needToRemove) {
        setSelectedCharacters(
          selectedCharaters?.filter(
            (targetItem: IItemProps) =>
              sourceItem.id !== targetItem.id && sourceItem.isSelected === false
          )
        );
      }
    });
    tempSelectedCharacters.length > 0 &&
      setSelectedCharacters((selectedCharaters: any) => [
        ...selectedCharaters,
        ...tempSelectedCharacters,
      ]);
  } else {
    setSelectedCharacters(
      resultArray?.filter((item: IItemProps) => item.isSelected === true)
    );
  }
};
