import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  Platform,
} from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />

      <ImageBackground
        source={{
          uri: "https://majorspoilers.com/wp-content/uploads/2024/07/Fantastic-Four-1002.jpg",
        }}
        style={styles.background}
        resizeMode="contain"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>My Fantastic Four Collection!</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 12,
    padding: 24,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "serif",
  },
});
