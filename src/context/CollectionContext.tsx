import { collectionItem } from "../types/types";
import { createContext, ReactNode, useState } from "react";

type CollectionContextType = {
  items: collectionItem[];
  setItems: React.Dispatch<React.SetStateAction<collectionItem[]>>;
};

export const CollectionContext = createContext<
  CollectionContextType | undefined
>(undefined);

export const CollectionProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<collectionItem[]>([]);

  return (
    <CollectionContext.Provider value={{ items, setItems }}>
      {children}
    </CollectionContext.Provider>
  );
};
