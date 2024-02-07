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
  const [page, setPage] = useState(0);

  const {
    results,
    fetch: { results: resultStatus },
  } = useAppSelector((state) => state.RickAndMorty);

  const fetchMoreData = () => {
    console.log("here1");
    setPage(page + 1);
    console.log("here", page);
    dispatch(getCharacterByName({ name: searchText, currentPage: page }));
  };

  useEffect(() => {
    setPage(0);
    setResultArray([]);
    dispatch(getCharacterByName({ name: searchText, currentPage: page }));
    results && setDataLenght(results?.info?.count);
  }, [searchText]);

  useEffect(() => {
    const tempSelectedCharacters = selectedCharaters;
    if (results) {
      const tempResultArray = results?.results?.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          image: item.image,
          episode: item.episode.length,
          isSelected: tempSelectedCharacters?.some(
            (tmpItem: IItemProps) => tmpItem.id === item.id
          ),
        };
      });
      resultArray.length > 0
        ? setResultArray([...resultArray, ...tempResultArray])
        : setResultArray(tempResultArray);
    }
  }, [dispatch, results]);

  console.log(resultArray);
  useEffect(() => {
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
      setSelectedCharacters([...selectedCharaters, ...tempSelectedCharacters]);
    }
    setSelectedCharacters(
      resultArray?.filter((item: IItemProps) => item.isSelected === true)
    );
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
          fetchMoreData={fetchMoreData}
        />
      </div>
    </div>
  );
}

export default App;
