import { useWantlist } from "../hooks/useWantlist";
import { useIssues } from "../hooks/useIssues";
import { issueObject } from "../types/types";
import CardContainer from "./CardContainer";
import { View, Text, StyleSheet } from "react-native";

export default function Wantlist() {
  const wantlistIssues: issueObject[] = [];
  const { wishes } = useWantlist();
  const { issues } = useIssues();

  wishes.forEach((wish) => {
    issues.forEach((issue) => {
      if (wish === issue.id) {
        wantlistIssues.push(issue);
      }
    });
  });

  const sortedIssues = wantlistIssues.sort((a: issueObject, b: issueObject) =>
    a.cover_date.localeCompare(b.cover_date)
  );

  return (
    <View style={styles.wantlist}>
      <Text style={styles.title}>MY WANTLIST</Text>
      <CardContainer arrayToRender={sortedIssues} />
    </View>
  );
}

const styles = StyleSheet.create({
  wantlist: {
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
