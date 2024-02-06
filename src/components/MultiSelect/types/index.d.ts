import { IRickAndMorty } from "../../../store/types/response";

export interface IMultiSelectProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  searchText: string;
  setSearchText: (e: string) => void;
  resultArray: any;
}

export interface IListItemProps extends IRickAndMorty {
  selectedCharatersArray: string[];
  setSelectedCharacters: (e: string[]) => void;
}
