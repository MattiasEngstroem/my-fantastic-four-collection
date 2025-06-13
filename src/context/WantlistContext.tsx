import { createContext, ReactNode, useState } from "react";

type WantlistContextType = {
  wishes: number[];
  setWishes: React.Dispatch<React.SetStateAction<number[]>>;
};

export const WantlistContext = createContext<WantlistContextType | undefined>(
  undefined
);

export const WantlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishes, setWishes] = useState<number[]>([]);

  return (
    <WantlistContext.Provider value={{ wishes, setWishes }}>
      {children}
    </WantlistContext.Provider>
  );
};
