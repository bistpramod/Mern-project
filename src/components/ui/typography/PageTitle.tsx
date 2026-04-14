import { type IH1Props } from "./PageTitle.contract";


// export const H1 = (props: Readonly<IH1Props>) => {
export const H1 = ({className= 'text-green-900', children}: Readonly<IH1Props>) => {
  // object data type 
  // state -> hook
  // {props.children}
  return <h1 className={`text-5xl font-semibold ${className}`}>
    {children}
  </h1>;
}

export const H2 = ({className= 'text-green-950', children}: Readonly<IH1Props>) => {
  // object data type 
  // state -> hook
  // {props.children}
  return <h2 className={`text-3xl font-semibold ${className}`}>
    {children}
  </h2>;
}

export const H3 = ({className= 'text-green-950', children}: Readonly<IH1Props>) => {
  // object data type 
  // state -> hook
  // {props.children}
  return <h3 className={`text-2xl font-semibold ${className}`}>
    {children}
  </h3>;
}