import { useEffect, useState } from "react";
import { MultiSelect } from "./components/MultiSelect";
import { getCharacterByName } from "./store/asyncActions/rickAndMortyActions";
import { useAppDispatch, useAppSelector } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState("");
  const [resultArray, setResultArray] = useState([]);

  const {
    results,
    fetch: { results: resultStatus },
  } = useAppSelector((state) => state.RickAndMorty);

  console.log(resultStatus);
  useEffect(() => {
    dispatch(getCharacterByName(searchText));
  }, [searchText]);
  useEffect(() => {
    if (searchText.length > 0 && results?.data?.results) {
      const tempResultArray = results?.data?.results?.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          image: item.image,
          episode: item.episode.length,
          isSelected: false,
        };
      });
      setResultArray(tempResultArray);
    } else setResultArray([]);
  }, [dispatch, searchText]);

  console.log("resultArray", resultArray);
  return (
    <div className="relative flex h-screen w-full items-center justify-center ">
      <div className="flex lg:w-1/3 md:w-1/2 w-2/3">
        <MultiSelect
          searchText={searchText}
          setSearchText={setSearchText}
          resultArray={resultArray}
          resultStatus={resultStatus}
          setResultArray={setResultArray}
        />
      </div>
    </div>
  );
}

export default App;
