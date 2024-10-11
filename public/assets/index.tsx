import { CSSProperties } from "react";
import CompanyIcon from "./company";
export interface IIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  rotation?: number;
  rotate?: number;
  style?: CSSProperties;
  onClick?: () => void;
}
 
export {
    CompanyIcon}