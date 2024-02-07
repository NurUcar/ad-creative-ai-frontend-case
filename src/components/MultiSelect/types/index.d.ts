export interface IMultiSelectProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  searchText: string;
  setSearchText: (e: string) => void;
  resultArray: any;
  setResultArray: (e: any) => void;
  selectedCharaters: any;
  setSelectedCharacters: (e: any) => void;
  resultStatus: string;
}

export interface IItemProps {
  id: number;
  name: string;
  image: string;
  episode: number;
  isSelected: boolean;
}
export interface IListItemProps {
  item: IItemProps;
  resultArray: any;
  setResultArray: (e: any) => void;
  setSelectedCharacters: (e: any) => void;
}

export interface ISelectedItemProps {
  item: IItemProps;
  resultArray: any;
  setResultArray: (e: any) => void;
}
