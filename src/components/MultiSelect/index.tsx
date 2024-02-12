import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import NoDataGif from "../../assets/img/no-data.gif";
import RickAndMortyGif from "../../assets/img/rickAndMorty.gif";
import { classNames } from "../../utils/classNames";
import { IconButton } from "../IconButton";
import { ChevronSVG } from "../Icons/ChevronSVG";
import { handleListItemKeyDown, handleSelectedItemKeyDown } from "./helpers";
import { ListItem } from "./sub-components/ListItem";
import { ListItemSkeleton } from "./sub-components/ListItem/sub-component/SkeletonLoader";
import { SelectedItem } from "./sub-components/SelectedItem";
import { IItemProps, IMultiSelectProps } from "./types";

const MultiSelect = ({
  searchText,
  setSearchText,
  resultArray,
  resultStatus,
  setResultArray,
  selectedCharaters,
  setSelectedCharacters,
  page,
  setPage,
  dataLength,
}: IMultiSelectProps) => {
  const listItemContainer = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isScrollBottom, setIsScrollBottom] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );
  const [selectedListItemIndex, setSelectedListItemIndex] = useState<
    number | null
  >(null);

  useEffect(() => {
    searchText?.length > 0 ? setIsPanelOpen(true) : setIsPanelOpen(false);
  }, [searchText]);

  useEffect(() => {
    resultStatus === "success" && setIsLoading(false);
  }, [resultStatus]);
  const onScroll = (e: any) => {
    setIsScrollBottom(
      e.target.scrollHeight - e.target.scrollTop - 10 <= e.target.clientHeight
    );

    if (isScrollBottom) {
      dataLength > resultArray.length && setPage(page + 1);
    }
  };

  const onSearch = (tempSearchText: string) => {
    setPage(1);
    setResultArray([]);
    setIsScrollBottom(false);
    setSearchText(tempSearchText);
  };

  return (
    <div className="flex w-full flex-col relative">
      <div
        className={classNames(
          "inline-flex w-full items-center border rounded-md transition-all min-h-[52px] bg-white",
          error ? "!border-secondaryMadderLake bg-white" : "",
          !isPanelOpen
            ? " border-secondaryFadingSunset bg-white "
            : " border-maximumBlue bg-secondaryGhostWhite "
        )}
      >
        <div
          className=" flex flex-wrap w-full h-full  flex-row place-items-center outline-none"
          tabIndex={0}
          onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
            handleSelectedItemKeyDown({
              event,
              selectedItemIndex,
              setSelectedItemIndex,
              selectedCharaters,
              setResultArray,
            })
          }
        >
          {selectedCharaters?.map((item: IItemProps, index: number) => (
            <SelectedItem
              key={item?.id}
              item={item}
              resultArray={resultArray}
              setResultArray={setResultArray}
              selectedCharaters={selectedCharaters}
              setSelectedCharacters={setSelectedCharacters}
              setSelectedIndex={setSelectedItemIndex}
              selectedIndex={selectedItemIndex}
            />
          ))}
          <input
            className={
              "h-8 w-full rounded-md outline-none focus:caret-primaryBlue text-base z-[1] px-3 mb-1 ps-3"
            }
            onChange={(e) => onSearch(e.target.value)}
            value={searchText}
          />
        </div>

        <div className="inline-block mx-2 h-fit w-5 cursor-pointer">
          <IconButton
            icon={ChevronSVG}
            iconClassName={classNames(
              "w-4 h-4 fill-secondaryFadingSunset z-10",
              !isPanelOpen ? "rotate-180 transform" : ""
            )}
            onClick={() => {
              setIsPanelOpen(!isPanelOpen);
            }}
          />
        </div>
      </div>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        show={isPanelOpen}
      >
        {resultStatus === "loading" ? (
          <ListItemSkeleton />
        ) : (
          <div
            ref={listItemContainer}
            className={classNames(
              "absolute bg-white mt-3 border w-full flex rounded-md transition-all h-[265px] flex-col overflow-auto focus:outline-none",
              error ? "!border-secondaryMadderLake bg-white   " : "",
              !isPanelOpen
                ? " border-secondaryFadingSunset bg-white "
                : " border-maximumBlue bg-secondaryGhostWhite "
            )}
            onScroll={onScroll}
            tabIndex={0}
            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
              handleListItemKeyDown({
                event,
                listItemContainer,
                selectedListItemIndex,
                setSelectedListItemIndex,
                resultArray,
                setResultArray,
              })
            }
          >
            {resultArray?.map((item: any) => {
              return (
                <ListItem
                  key={item.id}
                  item={item}
                  searchText={searchText}
                  resultArray={resultArray}
                  setResultArray={setResultArray}
                  setSelectedIndex={setSelectedListItemIndex}
                  selectedIndex={selectedListItemIndex}
                />
              );
            })}

            {error && (
              <span className="text-secondaryMadderLake text-base mt-2 ml-3">
                An error occured, please try again later.
              </span>
            )}
            {!searchText && (
              <div className="flex flex-col w-full h-full items-center justify-center ">
                <img src={RickAndMortyGif} alt="loading..." width={380} />
                <span className=" text-base mt-2">
                  You must search for one of Rick & Morty characters
                </span>
              </div>
            )}
            {resultStatus === "success"! &&
              resultArray.length === 0 &&
              searchText.length > 0 && (
                <div className="flex flex-col w-full h-full items-center justify-center ">
                  <img src={NoDataGif} alt="loading..." width={380} />
                  <span className=" text-base mt-2">No Data Found!</span>
                </div>
              )}
          </div>
        )}
      </Transition>
    </div>
  );
};

export { MultiSelect };
