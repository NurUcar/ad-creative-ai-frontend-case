import { useEffect, useState } from "react";
import { MultiSelect } from "./components/MultiSelect";
import { getCharacterByName } from "./store/asyncActions/rickAndMortyActions";
import { useAppDispatch, useAppSelector } from "./store/store";

function App() {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState("");

  const {
    results,
    fetch: { results: resultStatus },
  } = useAppSelector((state) => state.RickAndMorty);

  useEffect(() => {
    dispatch(getCharacterByName(searchText));
  }, [dispatch, searchText]);

  console.log("results", results);
  console.log("resultStatus", resultStatus);
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-rick-and-morty-background bg-contain bg-center">
      <div className="flex w-1/3">
        <MultiSelect
          searchText={searchText}
          setSearchText={setSearchText}
          resultArray={[]}
        />
      </div>
    </div>
  );
}

export default App;
