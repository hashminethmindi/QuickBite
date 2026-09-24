import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  const handleLogout = () => {
    navigation.getParent()?.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* HEADER */}
        <Text style={styles.pageTitle}>Profile</Text>

        {/* PROFILE CARD */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons
              name="person"
              size={34}
              color="#2F67EE"
            />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>
              Student User
            </Text>

            <Text style={styles.studentId}>
              Student ID: STU-2026-001
            </Text>
          </View>

          <Pressable style={styles.editButton}>
            <Ionicons
              name="pencil-outline"
              size={18}
              color="#2F67EE"
            />
          </Pressable>
        </View>

        {/* STATS */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>
              Orders
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>
              Rs. 845
            </Text>
            <Text style={styles.statLabel}>
              Total spent
            </Text>
          </View>
        </View>

        {/* ORDER HISTORY */}
        <Text style={styles.sectionTitle}>
          Order History
        </Text>

        <View style={styles.orderCard}>
          <View style={styles.orderTop}>
            <View>
              <Text style={styles.orderNumber}>
                #QB4721
              </Text>

              <Text style={styles.orderDate}>
                Today · 10:32 AM
              </Text>
            </View>

            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>
                Ready
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.orderBottom}>
            <Text style={styles.orderItems}>
              2× Grilled Chicken Meal
            </Text>

            <Text style={styles.orderPrice}>
              Rs. 375
            </Text>
          </View>
        </View>

        <View style={styles.orderCard}>
          <View style={styles.orderTop}>
            <View>
              <Text style={styles.orderNumber}>
                #QB3184
              </Text>

              <Text style={styles.orderDate}>
                22 Sep · 1:15 PM
              </Text>
            </View>

            <View style={styles.completedBadge}>
              <Text style={styles.completedText}>
                Completed
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.orderBottom}>
            <Text style={styles.orderItems}>
              Beef Burger · Iced Coffee
            </Text>

            <Text style={styles.orderPrice}>
              Rs. 285
            </Text>
          </View>
        </View>

        <View style={styles.orderCard}>
          <View style={styles.orderTop}>
            <View>
              <Text style={styles.orderNumber}>
                #QB2056
              </Text>

              <Text style={styles.orderDate}>
                18 Sep · 12:40 PM
              </Text>
            </View>

            <View style={styles.completedBadge}>
              <Text style={styles.completedText}>
                Completed
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.orderBottom}>
            <Text style={styles.orderItems}>
              Pasta Plate
            </Text>

            <Text style={styles.orderPrice}>
              Rs. 185
            </Text>
          </View>
        </View>

        {/* ACCOUNT */}
        <Text style={styles.sectionTitle}>
          Account
        </Text>

        <View style={styles.settingsCard}>
          <Pressable style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons
                  name="notifications-outline"
                  size={19}
                  color="#2F67EE"
                />
              </View>

              <Text style={styles.settingText}>
                Notifications
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#94A3B8"
            />
          </Pressable>

          <View style={styles.settingDivider} />

          <Pressable style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIcon}>
                <Ionicons
                  name="help-circle-outline"
                  size={19}
                  color="#2F67EE"
                />
              </View>

              <Text style={styles.settingText}>
                Help & Support
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#94A3B8"
            />
          </Pressable>
        </View>

        {/* LOGOUT */}
        <Pressable
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Ionicons
            name="log-out-outline"
            size={19}
            color="#EF4444"
          />

          <Text style={styles.logoutText}>
            Log Out
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    padding: 18,
    paddingBottom: 35,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 18,
  },

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },

  profileInfo: {
    flex: 1,
    marginLeft: 13,
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0F172A",
  },

  studentId: {
    marginTop: 4,
    fontSize: 11,
    color: "#64748B",
  },

  editButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },

  statsContainer: {
    flexDirection: "row",
    gap: 11,
    marginTop: 13,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    padding: 15,
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },

  statValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2F67EE",
  },

  statLabel: {
    marginTop: 3,
    fontSize: 11,
    color: "#64748B",
  },

  sectionTitle: {
    marginTop: 23,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },

  orderCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },

  orderTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  orderNumber: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
  },

  orderDate: {
    fontSize: 10,
    color: "#94A3B8",
    marginTop: 4,
  },

  statusBadge: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  statusText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#2F67EE",
  },

  completedBadge: {
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  completedText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#16A34A",
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 11,
  },

  orderBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderItems: {
    flex: 1,
    fontSize: 11,
    color: "#64748B",
  },

  orderPrice: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0F172A",
  },

  settingsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#E7EDF5",
    overflow: "hidden",
  },

  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
  },

  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  settingIcon: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },

  settingText: {
    marginLeft: 11,
    fontSize: 12,
    fontWeight: "600",
    color: "#334155",
  },

  settingDivider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginHorizontal: 14,
  },

  logoutButton: {
    height: 50,
    marginTop: 16,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#FECACA",
    backgroundColor: "#FEF2F2",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },

  logoutText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#EF4444",
  },
});