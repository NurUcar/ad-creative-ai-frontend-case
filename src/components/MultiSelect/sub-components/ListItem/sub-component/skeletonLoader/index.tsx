import { Skeleton } from "../../../../../Skeleton";

const ListItemSkeleton = () => {
  return (
    <Skeleton>
      <div
        className={
          "w-full flex flex-row h-18 py-3 flex-shrink-0 items-center border-b-2 pl-3 outline-none"
        }
      >
        <Skeleton.Checkbox />
        <div className="ml-3 mr-1.5">
          <Skeleton.Image />
        </div>
        <div className="flex flex-col ml-1.5 text ">
          <span className="text-gray-500 font-semibold text-lg mb-2 ">
            <Skeleton.Text className="w-40 h-6" type="bold" />
          </span>
          <span className="text-gray-500">
            <Skeleton.Text className="w-40 h-3" />
          </span>
        </div>
      </div>
    </Skeleton>
  );
};

export { ListItemSkeleton };