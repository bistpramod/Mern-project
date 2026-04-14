import type { BaseSyntheticEvent } from "react";
import type { IFileInputProps, ISelectOptionsProps, ISingleOption, ITextAreaProps, ITextInputProps } from "./Form.contract";
import { Controller, useController, type FieldValues } from "react-hook-form";

export const TextInput = <T extends FieldValues>({type = 'text', name, className='', errMsg="", control}: Readonly<ITextInputProps<T>>) => {
  // 
  return <Controller
        name={name}
        control={control}
        render={({field}) => {
          return (
            <>
              <input
                type={type}
                {...field}
                placeholder={`Enter your ${name}....`}
                className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className}`}
              />
              <span className="text-red-800 text-sm italic">{errMsg}</span>
            </>
          );
        }}
      ></Controller>

}


export const FileInput = <T extends FieldValues>({ name, className='', errMsg="", control}: Readonly<IFileInputProps<T>>) => {
  const {field} = useController({
    name: name,
    control: control
  })
  return (
    <>
      <input
        type={'file'}
        placeholder={`Enter your ${name}....`}
        onChange={(e: BaseSyntheticEvent) => {
          const files = Object.values(e.target.files)     // [{}]   
          field.onChange(files[0])
        }}
        className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className}`}
      />
      <span className="text-red-800 text-sm italic">{errMsg}</span>
    </>
  );

}


export const TextAreaInput = <T extends FieldValues>({name, className='', errMsg="", control}: Readonly<ITextAreaProps<T>>) => {
  // 
  return (
    <Controller 
        name={name}
        control={control}
        render={({field}) => {
          return (<>
          <textarea
            {...field}
            placeholder={`Enter your ${name}....`}
            rows={5}
            className={`resize-none border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className}`}
          ></textarea>
          <span className="text-red-800 text-sm italic">{errMsg}</span></>
          )
        }}
      />
  );

}

export const SelectOptionInput = <T extends FieldValues>({name, className='', errMsg="", control, options}: Readonly<ISelectOptionsProps<T>>) => {
  const {field} = useController({
    name: name, 
    control:control
  })
  return (
    <>
      <select
        {...field}
        className={`border border-gray-300 w-full p-2 h-10 rounded-md shadow bg-white ${className}`}>
          <option value="">-- Select Any One --</option>
          {
            options && options.map((option: ISingleOption, i: number) => (
              <option key={i}  value={option.value}>
                {option.label}
              </option>
            ))
          }
      </select>
      <span className="text-red-800 text-sm italic">{errMsg}</span>
    </>
  );

}