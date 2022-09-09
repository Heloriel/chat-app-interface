import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
}

export interface ISearchContext{
  searchOpen: boolean;
  setSearchOpen: Function;
}

export const Context = createContext({} as ISearchContext);

export default function SearchContext({children}: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const contextPack = {searchOpen, setSearchOpen};

  return (
    <Context.Provider value={contextPack}>{children}</Context.Provider>
  )
}
