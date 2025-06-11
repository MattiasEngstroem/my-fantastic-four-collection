import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../components/HomePage";
import Search from "../components/Search";
import Collection from "../components/Collection";
import Wantlist from "../components/Wantlist";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "Home") iconName = "home";
          else if (route.name === "Search") iconName = "search";
          else if (route.name === "Collection") iconName = "albums";
          else if (route.name === "Wantlist") iconName = "albums-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Collection" component={Collection} />
      <Tab.Screen name="Wantlist" component={Wantlist} />
    </Tab.Navigator>
  );
}
