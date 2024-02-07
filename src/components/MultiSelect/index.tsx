import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import RickAndMortyGif from "../../assets/img/rickAndMorty.gif";
import { classNames } from "../../utils/classNames";
import { IconButton } from "../IconButton";
import { ChevronSVG } from "../Icons/ChevronSVG";
import { Spinner } from "../Spinner";
import { ListItem } from "./sub-components/ListItem";
import { SelectedItem } from "./sub-components/SelectedItem";
import { IItemProps, IMultiSelectProps } from "./types";

const MultiSelect = ({
  searchText,
  setSearchText,
  resultArray,
  setResultArray,
  selectedCharaters,
  setSelectedCharacters,
  dataLength,
  fetchMoreData,
}: IMultiSelectProps) => {
  const [error, setError] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    searchText?.length > 0 ? setIsPanelOpen(true) : setIsPanelOpen(false);
  }, [searchText]);

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
        <div className=" flex flex-wrap w-full h-full  flex-row place-items-center ">
          {selectedCharaters?.map((item: IItemProps) => (
            <SelectedItem
              key={item?.id}
              item={item}
              resultArray={resultArray}
              setResultArray={setResultArray}
              selectedCharaters={selectedCharaters}
              setSelectedCharacters={setSelectedCharacters}
            />
          ))}
          <input
            className={
              "h-8 rounded-md outline-none focus:caret-primaryBlue text-base z-[1] px-3 mb-1 ps-3"
            }
            onChange={(e) => setSearchText(e.target.value)}
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
        <div
          className={classNames(
            "absolute bg-white mt-3 border w-full flex rounded-md transition-all h-[265px] flex-col overflow-auto ",
            error ? "!border-secondaryMadderLake bg-white   " : "",
            !isPanelOpen
              ? " border-secondaryFadingSunset bg-white "
              : " border-maximumBlue bg-secondaryGhostWhite "
          )}
        >
          <InfiniteScroll
            dataLength={dataLength}
            next={fetchMoreData}
            hasMore={dataLength > resultArray ? true : false}
            scrollThreshold={1}
            loader={<Spinner className="!h-5" />}
            scrollableTarget="scrollableDiv"
          >
            {resultArray?.map((item: any) => {
              return (
                <ListItem
                  key={item.id}
                  item={item}
                  searchText={searchText}
                  resultArray={resultArray}
                  setResultArray={setResultArray}
                />
              );
            })}
          </InfiniteScroll>

          {error && (
            <span className="text-secondaryMadderLake text-base mt-2 ml-3">
              An error occured, please try again later.
            </span>
          )}
          {!searchText && (
            <div className="flex flex-col w-full h-full items-center justify-center ">
              <img src={RickAndMortyGif} alt="loading..." width={380} />
              <span className="text-secondaryMadderLake text-base mt-2">
                You must search for one of Rick & Morty characters
              </span>
            </div>
          )}
        </div>
      </Transition>
    </div>
  );
};

export { MultiSelect };
