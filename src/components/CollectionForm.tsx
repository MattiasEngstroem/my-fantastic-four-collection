import { useEffect, useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { collectionItem } from "../types/types";
import { useWantlist } from "../hooks/useWantlist";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

type CollectionFormProps = {
  issueId: number;
};
export default function CollectionForm({ issueId }: CollectionFormProps) {
  const [grade, setGrade] = useState("😁");
  const [comment, setComment] = useState("");
  const [condition, setCondition] = useState("NM");

  const { items, setItems } = useCollection();
  const { wishes, setWishes } = useWantlist();

  const thisItem = items.find((item) => item.id === issueId);

  const grades = ["😠", "😐", "😊", "😁"];
  const conditions = ["PR", "FR", "GD", "VG", "FN", "VF", "NM"];

  useEffect(() => {
    if (thisItem) {
      setGrade(thisItem.grade);
      setComment(thisItem.comment);
      setCondition(thisItem.condition);
    }
  }, [thisItem]);

  const handleSubmit = () => {
    const newItem: collectionItem = {
      id: issueId,
      grade: grade,
      comment: comment,
      condition: condition,
    };
    const newCollection = items.filter((item) => item.id != issueId);
    newCollection.push(newItem);
    setItems(newCollection);

    const newWantlist = wishes.filter((wish) => wish != issueId);
    setWishes(newWantlist);
  };

  return (
    <View style={styles.collectionForm}>
      <Text>grade:</Text>
      <Picker
        selectedValue={grade}
        onValueChange={(itemValue) => setGrade(itemValue)}
        style={styles.picker}
      >
        {grades.map((g) => (
          <Picker.Item key={g} label={g} value={g} />
        ))}
      </Picker>
      <Text>condition:</Text>
      <Picker
        selectedValue={condition}
        onValueChange={(itemValue) => setCondition(itemValue)}
        style={styles.picker}
      >
        {conditions.map((c) => (
          <Picker.Item key={c} label={c} value={c} />
        ))}
      </Picker>
      <Text>comment:</Text>
      <TextInput
        style={styles.textInput}
        multiline={true}
        value={comment}
        onChangeText={(value: string) => setComment(value)}
      />
      <Button
        title={thisItem ? "EDIT" : "ADD TO COLLECTION"}
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  collectionForm: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    width: "90%",
    alignSelf: "center",
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  textInput: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    textAlignVertical: "top",
  },
});
