import { FlatList, View, Text, StyleSheet } from "react-native";
import { useIssues } from "../hooks/useIssues";

export default function IssuesList() {
  const { issues } = useIssues();

  return (
    <View style={styles.container}>
      <FlatList
        data={issues}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>Issue number: {item.issue_number}</Text>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text style={styles.text}>Date: {item.cover_date}</Text>
            <Text style={styles.text}>ID: {item.id}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingLeft: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: "#f0f0f0",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
  index: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
});
