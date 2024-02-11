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
  page: number;
  setPage: (e: number) => void;
  dataLength: number;
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
  searchText: string;
  setResultArray: (e: any) => void;
  resultArray: any;
}

export interface ISelectedItemProps {
  item: IItemProps;
  resultArray: any;
  setResultArray: (e: any) => void;
  selectedCharaters: any;
  setSelectedCharacters: (e: any) => void;
}
