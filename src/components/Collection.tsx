import { useCollection } from "../hooks/useCollection";
import { useIssues } from "../hooks/useIssues";
import { issueObject } from "../types/types";
import CardContainer from "./CardContainer";
import { StyleSheet, Text, View } from "react-native";

export default function Collection() {
  const collectionIssues: issueObject[] = [];
  const { items } = useCollection();
  const { issues } = useIssues();

  items.forEach((item) => {
    issues.forEach((issue) => {
      if (item.id === issue.id) {
        collectionIssues.push(issue);
      }
    });
  });

  const sortedIssues = collectionIssues.sort((a: issueObject, b: issueObject) =>
    a.cover_date.localeCompare(b.cover_date)
  );

  return (
    <View style={styles.collection}>
      <Text style={styles.title}>MY COLLECTION</Text>
      <CardContainer arrayToRender={sortedIssues} />
    </View>
  );
}

const styles = StyleSheet.create({
  collection: {
    backgroundColor: "#faf4e6",
    paddingTop: 50,
    padding: 16,
    paddingBottom: 50,
  },
  title: {
    fontSize: 25,
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 20,
  },
});
