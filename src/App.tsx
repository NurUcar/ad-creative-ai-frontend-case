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

  useEffect(() => {
    dispatch(getCharacterByName(searchText));
  }, [dispatch, searchText]);
  useEffect(() => {
    results?.data?.results && setResultArray(results?.data?.results);
  }, [dispatch, searchText]);

  return (
    <div className="relative flex h-screen w-full items-center justify-center ">
      <div className="flex lg:w-1/3 md:w-1/2 w-2/3">
        <MultiSelect
          searchText={searchText}
          setSearchText={setSearchText}
          resultArray={resultArray}
          resultStatus={resultStatus}
        />
      </div>
    </div>
  );
}

export default App;
