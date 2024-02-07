import React, { DetailedHTMLProps } from "react";
import { IIconProps } from "../../Icons/types";

export interface IIconButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: React.ComponentType<IIconProps>;
  iconClassName?: string;
  rotateOnHover?: boolean;
}
