import { IIconProps } from "../types";

const ChevronSVG = ({ className = "", id = "ic_chevron_up" }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12.453"
      height="7.12"
      viewBox="0 0 12.453 7.12"
      className={className}
    >
      <path
        id={id}
        d="M6.229,2.146l4.709,4.712a.886.886,0,0,0,1.257,0,.9.9,0,0,0,0-1.261L6.859.259A.888.888,0,0,0,5.632.233L.26,5.594A.89.89,0,0,0,1.516,6.855Z"
      />
    </svg>
  );
};

export { ChevronSVG };
