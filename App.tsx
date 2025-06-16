import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { IssuesProvider } from "./src/context/IssuesContext";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { CollectionProvider } from "./src/context/CollectionContext";
import { WantlistProvider } from "./src/context/WantlistContext";

export default function App() {
  return (
    <IssuesProvider>
      <CollectionProvider>
        <WantlistProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </WantlistProvider>
      </CollectionProvider>
    </IssuesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0055a5",
  },
});
