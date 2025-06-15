import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

type SearchFormProps = {
  year: string;
  name: string;
  handleYearChange: (value: string) => void;
  handleNameChange: (value: string) => void;
  handleClick: () => void;
};

export default function SearchForm({
  year,
  name,
  handleYearChange,
  handleNameChange,
  handleClick,
}: SearchFormProps) {
  const years: number[] = [];
  for (let i: number = 1961; i < 1997; i++) {
    years.push(i);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Year:</Text>
      <Picker
        selectedValue={year}
        onValueChange={(itemValue) => handleYearChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="All" value="all" />
        {years.map((yearOption) => (
          <Picker.Item
            key={yearOption}
            label={yearOption.toString()}
            value={yearOption.toString()}
          />
        ))}
      </Picker>

      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={handleNameChange}
      />

      <Button title="Search" onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#faf4e6",
    paddingTop: 25,
    padding: 16,
    gap: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
});
