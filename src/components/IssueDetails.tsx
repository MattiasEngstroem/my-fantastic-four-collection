import React from "react";
import { Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/StackNavigator";

type IssueDetailsRouteProp = RouteProp<RootStackParamList, "IssueDetails">;

type Props = {
  route: IssueDetailsRouteProp;
};

export default function IssueDetails({ route }: Props) {
  const { itemId } = route.params;

  return <Text>IssueDetails</Text>;
}
