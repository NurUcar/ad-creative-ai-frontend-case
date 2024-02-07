export interface IMultiSelectProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  searchText: string;
  setSearchText: (e: string) => void;
  resultArray: any;
  resultStatus: string;
}

export interface IListItemProps {
  name: string;
  image: string;
  episode: number;
  selectedCharatersArray: string[];
  setSelectedCharacters: (e: string[]) => void;
}
