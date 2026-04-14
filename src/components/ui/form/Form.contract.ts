import type {
  HTMLInputTypeAttribute,
  ReactNode,
} from "react";
import type { Control, Path, FieldValues } from "react-hook-form";

export interface IFormLabelProps {
  htmlFor?: string;
  className?: string;
  children: ReactNode;
}


export interface IBaseType{
  className?: string;
  errMsg?: string;
}

export interface IFileInputProps<T extends FieldValues> extends IBaseType {
  control: Control<T>;
  name: Path<T>;
  // control: any;
}

export interface ITextAreaProps<T extends FieldValues> extends IBaseType {
  rows?: number;
  control: Control<T>;
  name: Path<T>;
}


export interface ITextInputProps<T extends FieldValues> extends IBaseType {
  type: HTMLInputTypeAttribute;
  control: Control<T>;
  name: Path<T>;
}


export interface ISingleOption{label: string, value: string}

export interface ISelectOptionsProps<T extends FieldValues> extends IBaseType {
  options: Array<ISingleOption>;
  control: Control<T>;
  name: Path<T>;
}