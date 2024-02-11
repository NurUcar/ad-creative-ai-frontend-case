import { useEffect, useState } from "react";
import { MultiSelect } from "./components/MultiSelect";
import { IItemProps } from "./components/MultiSelect/types";
import { getCharacterByName } from "./store/asyncActions/rickAndMortyActions";
import { useAppDispatch, useAppSelector } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState("");
  const [resultArray, setResultArray] = useState<IItemProps[]>([]);
  const [selectedCharaters, setSelectedCharacters] = useState<IItemProps[]>([]);
  const [dataLength, setDataLenght] = useState(0);
  const [page, setPage] = useState(1);

  const {
    results,
    fetch: { results: resultStatus },
  } = useAppSelector((state) => state.RickAndMorty);

  const getResultArray = () => {
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
          ? setResultArray((resultArray) => [
              ...resultArray,
              ...tempResultArray,
            ])
          : setResultArray(tempResultArray);
    }
  };

  const getSelectedCharactersArray = () => {
    if (selectedCharaters?.length > 0) {
      const tempSelectedCharacters: IItemProps[] = [];
      resultArray.map((sourceItem: IItemProps) => {
        const needToAdd = selectedCharaters?.some(
          (targetItem: IItemProps) =>
            sourceItem.id !== targetItem.id && sourceItem.isSelected === true
        );

        const isAlreadyIncluded = selectedCharaters?.some(
          (targetItem: IItemProps) => targetItem.id === sourceItem.id
        );
        if (!isAlreadyIncluded && needToAdd) {
          tempSelectedCharacters.push(sourceItem);
        }
      });
      tempSelectedCharacters.length > 0 &&
        setSelectedCharacters((selectedCharaters) => [
          ...selectedCharaters,
          ...tempSelectedCharacters,
        ]);
    } else {
      setSelectedCharacters(
        resultArray?.filter((item: IItemProps) => item.isSelected === true)
      );
    }
  };

  useEffect(() => {
    if (
      searchText.length > 0 &&
      (results?.data?.info?.next !== null || page === 1)
    ) {
      dispatch(
        getCharacterByName({ name: searchText, currentPage: page })
      ).catch((error: any) => console.error("rejected", error));
    }
  }, [searchText, page]);

  useEffect(() => {
    getResultArray();
    results && setDataLenght(results?.data?.info?.count);
  }, [results]);

  useEffect(() => {
    getSelectedCharactersArray();
  }, [resultArray]);

  return (
    <div className="relative flex h-screen w-full items-center justify-center ">
      <div className="flex lg:w-1/3 md:w-1/2 w-2/3">
        <MultiSelect
          searchText={searchText}
          setSearchText={setSearchText}
          resultArray={resultArray}
          resultStatus={resultStatus}
          setResultArray={setResultArray}
          selectedCharaters={selectedCharaters}
          setSelectedCharacters={setSelectedCharacters}
          dataLength={dataLength}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default App;
