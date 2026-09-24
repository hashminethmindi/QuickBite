import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoLetter}>Q</Text>
      </View>

      <Text style={styles.title}>QuickBite</Text>
      <Text style={styles.subtitle}>Campus Food Ordering</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 80,
    height: 80,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  logoLetter: {
    fontSize: 42,
    fontWeight: "700",
    color: "#2563EB",
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: "#DBEAFE",
  },
});