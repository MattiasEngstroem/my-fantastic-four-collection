import React from "react";
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { useIssues } from "../hooks/useIssues";
import { useCollection } from "../hooks/useCollection";
import { useWantlist } from "../hooks/useWantlist";
import CollectionForm from "./CollectionForm";

type IssueDetailsRouteProp = RouteProp<RootStackParamList, "IssueDetails">;

type IssueDetailsProps = {
  route: IssueDetailsRouteProp;
};

export default function IssueDetails({ route }: IssueDetailsProps) {
  const { itemId } = route.params;

  const { issues } = useIssues();
  const { items, setItems } = useCollection();
  const { wishes, setWishes } = useWantlist();

  const issueId = Number(itemId);
  const thisIssue = issues.find((issue) => issueId === issue.id);
  const thisItem = items.find((item) => issueId === item.id);
  const isWish = wishes.includes(issueId);

  const removeCollection = () => {
    const filteredItems = items.filter((item) => item.id != issueId);
    setItems(filteredItems);
  };

  const addWantlist = () => {
    const tempWishes = [...wishes, issueId];
    setWishes(tempWishes);
  };

  const removeWantlist = () => {
    console.log("remove from wantlist");
    const filteredWishes = wishes.filter((wish) => wish != issueId);
    setWishes(filteredWishes);
  };

  if (!thisIssue) {
    return <Text>No issue found.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.detailsText}>
        <Text>
          #{thisIssue.issue_number}: {thisIssue.name}
        </Text>
        <Text>date: {thisIssue.cover_date}</Text>
        {thisItem && (
          <>
            <Text>grade: {thisItem.grade}</Text>
            <Text>condition: {thisItem.condition}</Text>
            <Text style={styles.comment}>{thisItem.comment}</Text>
            <Button title="REMOVE FROM COLLECTION" onPress={removeCollection} />
          </>
        )}
        {!isWish && !thisItem && (
          <Button title="ADD TO WANTLIST" onPress={addWantlist} />
        )}
        {isWish && (
          <Button title="REMOVE FROM WANTLIST" onPress={removeWantlist} />
        )}
      </View>
      <Image
        source={{ uri: thisIssue.image.original_url }}
        style={styles.detailsImage}
        resizeMode="contain"
      />
      <CollectionForm issueId={issueId} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 16,
    paddingBottom: 350,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  detailsText: {
    width: "100%",
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  comment: {
    fontStyle: "italic",
    color: "#666",
    marginVertical: 8,
  },
  detailsImage: {
    width: 200,
    height: 300,
    marginBottom: 16,
    borderRadius: 8,
  },
});
