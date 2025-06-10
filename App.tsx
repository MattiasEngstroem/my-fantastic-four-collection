import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { apiKey } from "./apiKey";
import IssuesList from "./src/components/IssuesList";
import { IssuesProvider } from "./src/context/IssuesContext";

export default function App() {
  return (
    <IssuesProvider>
      <IssuesList />
    </IssuesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
