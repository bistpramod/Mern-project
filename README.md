# SDLC  (CMS application, Content Management System, ecom, blog, porto, news, ngion, MIS, hotel, chat )
  - Software Development Lifecycle
  1. Requirement Gathering and Analysis
    - Ecom- CMS
      - Product 
      - Category
      - Brand 
      - Order, 
      - users
      - payments
  2. Designing
    - Web design(Designer)
  3. Development 
    - Architecture 
      - Folder and File structure 
      - ```text
          /src/
            assets/
              images/
              css/
              ...
            components/
              ui/
                card/
                  SingleCard
              common/
                course/
                  SingleCourseComponent
                    -> card
              header/
                filesFor Header
              footer/
              .....
            pages/  
              on any url change-> we need a new view 
              auth/
                login/
                register/
                active/
                forget-password/
                reset-password/

      ```


# Tailwind Installation Step
  - Run `pnpm i tailwindcss @tailwindcss/vite`
  - Add `import tailwindcss from "@tailwindcss/vite"` at top of `vite.config.ts`
  - Add `tailwindcss()` inside `plugins: [{ ...., tailwindcss()}]` in `vite.config.ts`
  - import css at your global css `@import "tailwindcss";` in your `./assets/css/global.css`
  - import global at main.tsx  `import "./assets/css/global.css"`
  - Use css at your component 
  - Restart your dev server `pnpm dev`


# React Hooks 
  - Every hook function starts with `use` keyword
  - can only be used within functional components
  - Manipulation of any states/hooks are only allowed after component is mounted once

## State and Effect Hooks
  - `useState` and `useEffect`
## Context 
  - `useContext`
## Performance
  - `useMemo`, `useCallback`, `useRef`
## Reducers
  - `useReducer`,
## Use
  - `useEffect => use`


```tsx

  useEffect(() => {
    // activity tracking 
    console.log("I am always exectued")
  })


  useEffect(() => {
    console.log("I am only called for the first time when component is mounted")
    return () => {
      setLoading(true);
    }
  }, [])


  useEffect(() => {
    console.log("I am always exectued when credential state is manipulated")
  }, [credentials, loading])

```

# Menu and feature for POS Application


## Form handling using hook form 
- Install packages 
  - `pnpm i react-hook-form @hookform/resolvers zod`      // zod already exists 
- Form Design 
```jsx
  // /srv/componets/**/LoginForm.tsx
  //....
  import z from "zod"
  import {useForm, Controller} from "react-hook-form"
  import {zodResolver} from "@hookform/resolvers"

  // vaidation rule 
  const LoginSchema = z.object({
    username: z.email().nonempty(),  //... 
    password: z.email().nonempty().nonoptional()
  })

  interface ICredentials{
    username: string, 
    password: string
  }


  // form component 
    const {control, handleSubmit, formState: {errors}} = useForm<ICredentials>({
      defaultValues: {
        username: "", 
        password: ""
      },
      resolver: zodResolver(LoginSchema)
    })
    
    // ....

    const login = (data: ICredentials) => {
      // api integrate 
    }


    // return 
      <form onSubmit={handleSubmit(login)}>
          
          <Controller
            name="username"
            control={control}
            render={({field}) => {
              return <input type="email" {...field} />

            }}
          />


          <InputComponent />

      </form>

// InputComponent
  import type {Control, Path, FieldValues} from "react-hook-form"

  interface IBaseProps {
    errMsg?: string,
    className?: string
  }

  interface IInputComponentProps<T extends FieldValues> extends IBaseProps {
    name: Path<T>, 
    control: Control<T>, 
    type?: React.HTMLInputTypeAttribute, 
  }

// import {type FieldValues, Controller} from "react-hook-form"
  export const InputComponent = <T extends FieldValues>({name, control, type, errMsg=""}:Readonly<IInputComponentProps<T>>) => {
    return (<Controller
        name={name}
        control={control}
        render={({field}) => {
          return <>
            <input type={type} {...field} />
            <span>{errMsg}</span>
          </>

        }}
      />)
  }
```

```jsx
// products
  // list view table(product)
  // form
// order 
  // list table order
  
  // order placement form
    // table 
    
// transactions 
  // view 
  // bill view
// users
  // view list
  // order 
```


```jsx
    localStorage.setItem("token", response.token);
      localStorage.getItem("token");
      localStorage.removeItem("token"); // key token remove
      localStorage.clear(); // all localstorage items

      // sessionStorage.setItem()
      // sessionStorage.getItem()
      // sessionStorage.removeItem()
      // sessionStorage.clear()

      // js default
      // document.cookie = "token="+response.token+"; expriesIn="+new Date()+"; path=/"
      // Cookies.set("token", response.token, {
      //   // domain: "",
      //   path: "/",      // default
      //   expires: 1,
      //   secure: true,   // only transfer to server if https is available
      //   sameSite: "Lax"
      // })

      // // remove
      // // Cookies.remove('token')
      // per domain 50 cookies 
        // per cookie => 4096chars
      // // get
      // const token = Cookies.get("token")
      // console.log(token)
      // web storages
      // cookies => Server Send(Http cookies), Client Side,
      // local storages
      // session storages
```

## API (Application Programming Interface)
  - nodejs, php, python, .net, java, 
  - Response type -> `json`
    - name, email, id
  - API Type 
    - REST, SOAP, Graphql, gRPC

  - CRUD (Create, Read, Update or Delete)
    - `fetch` or `axios` or `tanstack-query`
    - `Read => get`, `Create => post`, `Update => put/patch`, `Delete => delete`

  - Base URL: https://dummyjson.com/

## API Integration using Fetch 
  ```jsx
      // let response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}auth/login`, {
      //   method: "POST",
      //   // headers: {"Content-Type": "application/x-www-form-urlencoded"}
      //   headers: {"Content-Type": "application/json"},
      //   // headers: {"Content-Type": "multipart/form-data"}
      //   body: JSON.stringify(credentials)
      // });
      // response = await response.json()

  ```

### Local State management
### Global State Management
  
  - Redux(large scale application)
    - Store(global state)
    - Reducers
    - Consumer(dispatch, store selector)

  - Context(Small to medium scale Auth )
    - Create Context(state share, actions)
    - Provide(to components-provider)
    - Consumption(call)

## React Optimization 
  - Component Segreggation (Atomic Design pattern follow)
    - atoms -> molecule -> Organisims -> template -> Page
  - Code Splitting 

  - AdminLayout -> Page -> AdminDashboard -> Template -> Header, sidebar, footer, KPI -> HeaderTitle => Molecule => <h1>(atom)