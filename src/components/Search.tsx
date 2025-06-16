import { useState } from "react";
import SearchForm from "./SearchForm";
import { issueObject } from "../types/types";
import { useIssues } from "../hooks/useIssues";
import CardContainer from "./CardContainer";
import { View, StatusBar } from "react-native";

export default function Search() {
  const [year, setYear] = useState("all");
  const [name, setName] = useState("");
  const [results, setResults] = useState<issueObject[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const allIssues = useIssues().issues;

  const handleYearChange = (value: string) => {
    setYear(value);
  };

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleClick = () => {
    setHasSearched(true);

    if (year === "all") {
      const searchResults = allIssues.filter((issue: issueObject) => {
        return issue.name.toLowerCase().includes(name.toLowerCase());
      });
      setResults(searchResults);
    } else {
      const searchResults = allIssues.filter((issue: issueObject) => {
        return (
          issue.name.toLowerCase().includes(name.toLowerCase()) &&
          issue.cover_date.includes(year)
        );
      });
      setResults(searchResults);
    }
  };

  return (
    <View>
      <SearchForm
        year={year}
        name={name}
        handleYearChange={handleYearChange}
        handleNameChange={handleNameChange}
        handleClick={handleClick}
      />
      {hasSearched && <CardContainer arrayToRender={results} />}
    </View>
  );
}
