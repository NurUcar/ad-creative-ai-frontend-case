import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import tempImage from "../../assets/img/rick.jpg";
import { classNames } from "../../utils/classNames";
import { ChevronSVG } from "../Icons/ChevronSVG";
import { ListItem } from "./sub-components/ListItem";
import { IMultiSelectProps } from "./types";

const MultiSelect = ({
  searchText,
  setSearchText,
  resultArray,
}: IMultiSelectProps) => {
  const [error, setError] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedCharaters, setSelectedCharacters] = useState<string[]>([]);

  const selectedCharatersArray: string[] = [];
  useEffect(() => {
    searchText.length > 0 ? setIsPanelOpen(true) : setIsPanelOpen(false);
  }, [searchText]);

  return (
    <div className="flex w-full flex-col relative">
      <div
        className={classNames(
          "flex w-full border rounded-md transition-all relative min-h-12",
          error ? "!border-secondaryMadderLake bg-white" : "",
          !isPanelOpen
            ? " border-secondaryFadingSunset bg-white "
            : " border-maximumBlue bg-secondaryGhostWhite "
        )}
      >
        <input
          className={
            "w-full h-full rounded-md outline-none focus:caret-primaryBlue text-sm z-[1] px-3 "
          }
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <div className="absolute right-2.5 h-full w-3 flex items-center">
          <ChevronSVG
            className={classNames(
              "w-3 h-3 fill-secondaryFadingSunset z-10",
              !isPanelOpen ? "rotate-180 transform" : ""
            )}
          />
        </div>
      </div>
      {error && !isPanelOpen && (
        <span className="text-secondaryMadderLake text-xs mt-2 ltr:ml-3 rtl:mr-3">
          An error occured, please try again later.
        </span>
      )}

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        show={isPanelOpen}
      >
        <div
          className={classNames(
            "absolute bg-white mt-16 border w-full flex rounded-md transition-all h-[265px] flex-col overflow-auto",
            error ? "!border-secondaryMadderLake bg-white   " : "",
            !isPanelOpen
              ? " border-secondaryFadingSunset bg-white "
              : " border-maximumBlue bg-secondaryGhostWhite "
          )}
        >
          <ListItem
            key={0}
            name={"Rick and Morty"}
            image={tempImage}
            episode={2}
            setSelectedCharacters={setSelectedCharacters}
            selectedCharatersArray={selectedCharatersArray}
          />
          <ListItem
            key={0}
            name={"Rick and Morty"}
            image={tempImage}
            episode={2}
            setSelectedCharacters={setSelectedCharacters}
            selectedCharatersArray={selectedCharatersArray}
          />
          <ListItem
            key={0}
            name={"Rick and Morty"}
            image={tempImage}
            episode={2}
            setSelectedCharacters={setSelectedCharacters}
            selectedCharatersArray={selectedCharatersArray}
          />
        </div>
      </Transition>
    </div>
  );
};

export { MultiSelect };
