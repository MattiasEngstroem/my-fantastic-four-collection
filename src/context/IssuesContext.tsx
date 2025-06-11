import { createContext, useState, ReactNode, useEffect } from "react";
import { issueObject } from "../types/types";
import { staticIssues } from "../data/staticIssues";

type IssuesContextType = {
  issues: issueObject[];
};

export const IssuesContext = createContext<IssuesContextType | undefined>(
  undefined
);

export const IssuesProvider = ({ children }: { children: ReactNode }) => {
  const [issues, setIssues] = useState<issueObject[]>([]);

  useEffect(() => {
    const allIssues: issueObject[] = staticIssues();

    const sortedIssues = allIssues.sort((a: issueObject, b: issueObject) =>
      a.cover_date.localeCompare(b.cover_date)
    );

    setIssues(sortedIssues);
  }, []);

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  );
};
