import { useEffect, useState } from "react";
import { MultiSelect } from "./components/MultiSelect";
import {
  getResultArray,
  getSelectedCharactersArray,
} from "./components/MultiSelect/helpers";
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
    getResultArray({ results, selectedCharaters, resultArray, setResultArray });
    results && setDataLenght(results?.data?.info?.count);
  }, [results]);

  useEffect(() => {
    getSelectedCharactersArray({
      selectedCharaters,
      setSelectedCharacters,
      resultArray,
      setResultArray,
    });
  }, [resultArray]);

  return (
    <div className="relative flex h-[96vh] w-full items-center justify-center ">
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
