import { Text, StyleSheet, ScrollView } from "react-native";
import { issueObject } from "../types/types";

import Card from "./Card";

type CardContainerProps = {
  arrayToRender: issueObject[];
};

export default function CardContainer({ arrayToRender }: CardContainerProps) {
  if (arrayToRender && arrayToRender.length > 0) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {arrayToRender.map((issue) => (
          <Card key={issue.id} issue={issue} />
        ))}
      </ScrollView>
    );
  } else {
    return <Text>Sorry nothing here</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingBottom: 300,
    alignItems: "center",
  },
});
