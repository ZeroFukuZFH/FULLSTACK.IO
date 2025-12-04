"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FilterContextType = {
  state: string;
  setState: (value: string) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<string>('Select Level');

  return (
    <FilterContext.Provider value={{ state, setState }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}