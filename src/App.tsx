import { useState } from "react";
import { MultiSelect } from "./components/MultiSelect";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
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
