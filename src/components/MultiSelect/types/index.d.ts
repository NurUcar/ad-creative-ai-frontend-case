export interface IMultiSelectProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  searchText: string;
  setSearchText: (e: string) => void;
  resultArray: IItemProps[];
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
  resultArray: IItemProps[];
  setSelectedIndex: (e: number) => void;
  selectedIndex: number | null;
}

export interface ISelectedItemProps {
  item: IItemProps;
  resultArray: IItemProps[];
  setResultArray: (e: any) => void;
  setSelectedIndex: (e: number) => void;
  selectedIndex: number | null;
  selectedCharaters: any;
  setSelectedCharacters: (e: any) => void;
}

export interface IListItemKeyDownProps {
  event: React.KeyboardEvent<HTMLElement>;
  listItemContainer: any;
  selectedListItemIndex: number | null;
  setSelectedListItemIndex: (e: any) => void;
  resultArray: IItemProps[];
  setResultArray: (e: any) => void;
}

export interface ISelectedItemKeyDownProps {
  event: React.KeyboardEvent<HTMLElement>;
  selectedItemIndex: number | null;
  setSelectedItemIndex: (e: any) => void;
  selectedCharaters: IItemProps[];
  setResultArray: (e: any) => void;
}

export interface IGetResultArrayProps {
  results: any;
  selectedCharaters: IItemProps[];
  resultArray: IItemProps[];
  setResultArray: (e: any) => void;
}

export interface IGetSelectedCharactersArrayProps {
  selectedCharaters: IItemProps[];
  setSelectedCharacters: (e: any) => void;
  resultArray: IItemProps[];
  setResultArray: (e: any) => void;
}
