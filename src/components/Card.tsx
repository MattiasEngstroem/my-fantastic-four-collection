import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

import { useCollection } from "../hooks/useCollection";
import { useWantlist } from "../hooks/useWantlist";
import { issueObject } from "../types/types";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

type CardProps = {
  issue: issueObject;
};

export default function Card({ issue }: CardProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { items } = useCollection();
  const { wishes } = useWantlist();
  const isInCollection = items.some((item) => item.id === issue.id);
  const isInWantlist = wishes.some((wish) => wish === issue.id);

  const handlePress = () => {
    navigation.navigate("IssueDetails", { itemId: issue.id });
  };

  return (
    <View style={styles.card}>
      <Pressable onPress={handlePress}>
        <Image
          source={{ uri: issue.image.original_url }}
          style={styles.image}
          resizeMode="contain"
        />
      </Pressable>
      <Text style={styles.title}>
        #{issue.issue_number}: {issue.name}
      </Text>
      {isInCollection && <Text>IN COLLECTION</Text>}
      {isInWantlist && <Text>IN WANTLIST</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
    width: 300,
  },
  image: {
    width: 270,
    height: 360,
  },
  title: {
    marginTop: 8,
    fontWeight: "bold",
  },
});
