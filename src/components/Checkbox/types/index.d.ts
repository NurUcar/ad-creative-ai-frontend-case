export type ICheckboxProps = {
  checked?: boolean;
  onClick?: (checked: boolean) => void;
  label?: ReactNode | ReactNode[] | string | string[] | any;
  containerClassName?: string;
  labelClassName?: string;
} & DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
