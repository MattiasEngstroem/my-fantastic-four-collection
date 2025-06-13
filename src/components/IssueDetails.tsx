import React from "react";
import { Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/StackNavigator";

type IssueDetailsRouteProp = RouteProp<RootStackParamList, "IssueDetails">;

type IssueDetailsProps = {
  route: IssueDetailsRouteProp;
};

export default function IssueDetails({ route }: IssueDetailsProps) {
  const { itemId } = route.params;

  return <Text>IssueDetails</Text>;
}
