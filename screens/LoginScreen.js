import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.replace("Main");
  };

  const handleGuest = () => {
    navigation.replace("Main");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Q</Text>
        </View>

        <Text style={styles.title}>Welcome to QuickBite</Text>

        <Text style={styles.subtitle}>
          Order your campus favourites without waiting in line.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Student ID</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your student ID"
            placeholderTextColor="#94A3B8"
            value={studentId}
            onChangeText={setStudentId}
          />

          <Text style={styles.label}>Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Pressable
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>
              Login
            </Text>
          </Pressable>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.divider} />
          </View>

          <Pressable
            style={styles.guestButton}
            onPress={handleGuest}
          >
            <Text style={styles.guestButtonText}>
              Continue as Guest
            </Text>
          </Pressable>
        </View>

        <Text style={styles.footer}>
          Campus food. Faster.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2F7",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  card: {
    width: "100%",
    maxWidth: 390,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 38,
  },

  logoContainer: {
    width: 64,
    height: 64,
    backgroundColor: "#2F67EE",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 22,
  },

  logoText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "700",
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#0F172A",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 30,
  },

  form: {
    width: "100%",
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 7,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#D8E0EC",
    backgroundColor: "#F8FAFC",
    borderRadius: 11,
    paddingHorizontal: 14,
    fontSize: 14,
    marginBottom: 18,
    outlineStyle: "none",
  },

  loginButton: {
    height: 52,
    backgroundColor: "#2F67EE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2E8F0",
  },

  dividerText: {
    marginHorizontal: 12,
    color: "#94A3B8",
    fontSize: 12,
  },

  guestButton: {
    height: 52,
    borderWidth: 1,
    borderColor: "#2F67EE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  guestButtonText: {
    color: "#2F67EE",
    fontSize: 15,
    fontWeight: "600",
  },

  footer: {
    textAlign: "center",
    marginTop: 28,
    color: "#94A3B8",
    fontSize: 12,
  },
});