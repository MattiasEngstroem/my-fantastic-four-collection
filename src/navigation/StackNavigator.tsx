import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import IssueDetails from "../components/IssueDetails";

export type RootStackParamList = {
  Tabs: undefined;
  IssueDetails: { itemId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IssueDetails"
        component={IssueDetails}
        options={{ title: "Issue Details" }}
      />
    </Stack.Navigator>
  );
}
