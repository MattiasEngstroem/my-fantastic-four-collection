import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IssuesList from "./src/components/IssuesList";
import { IssuesProvider } from "./src/context/IssuesContext";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/*<IssuesProvider>
        <IssuesList />
      </IssuesProvider>*/}
    </NavigationContainer>
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
