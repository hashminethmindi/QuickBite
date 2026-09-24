import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function OrderConfirmationScreen({
  route,
  navigation,
}) {
  const {
    orderId,
    orderedItems = [],
    total = 0,
  } = route.params || {};

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.blueSection}>
          <View style={styles.checkCircle}>
            <Ionicons
              name="checkmark"
              size={40}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.title}>
            Order Confirmed!
          </Text>

          <Text style={styles.subtitle}>
            Your food is being prepared
          </Text>

          <View style={styles.orderInfo}>
            <View>
              <Text style={styles.infoLabel}>
                ORDER NO.
              </Text>

              <Text style={styles.infoValue}>
                #{orderId}
              </Text>
            </View>

            <View style={styles.verticalDivider} />

            <View>
              <Text style={styles.infoLabel}>
                READY IN
              </Text>

              <Text style={styles.infoValue}>
                ~15 min
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.sectionTitle}>
            What you ordered
          </Text>

          <View style={styles.orderCard}>
            {orderedItems.map((item) => (
              <View
                key={item.id}
                style={styles.itemRow}
              >
                <Text style={styles.itemText}>
                  <Text style={styles.quantity}>
                    {item.quantity}×
                  </Text>{" "}
                  {item.name}
                </Text>

                <Text style={styles.itemPrice}>
                  Rs. {item.price * item.quantity}
                </Text>
              </View>
            ))}

            <View style={styles.divider} />

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>
                Total paid
              </Text>

              <Text style={styles.totalPrice}>
                Rs. {total}
              </Text>
            </View>
          </View>

          <View style={styles.pickupCard}>
            <View style={styles.locationCircle}>
              <Ionicons
                name="location-outline"
                size={20}
                color="#16A34A"
              />
            </View>

            <View style={styles.pickupContent}>
              <Text style={styles.pickupTitle}>
                Pickup at Campus Canteen, Block A
              </Text>

              <Text style={styles.pickupText}>
                Counter 3 · Have your order number ready
              </Text>
            </View>
          </View>

          <View style={styles.estimateCard}>
            <View>
              <Text style={styles.estimateLabel}>
                Estimated pickup time
              </Text>

              <Text style={styles.estimateValue}>
                15–20 minutes
              </Text>
            </View>

            <View style={styles.clockBox}>
              <Ionicons
                name="time-outline"
                size={22}
                color="#2F67EE"
              />
            </View>
          </View>

          <Pressable
            style={styles.trackButton}
            onPress={() =>
              navigation.navigate("Main", {
                screen: "Orders",
                params: {
                  orderId,
                },
              })
            }
          >
            <Text style={styles.trackButtonText}>
              Track My Order
            </Text>
          </Pressable>

          <Pressable
            style={styles.menuButton}
            onPress={() =>
              navigation.navigate("Main", {
                screen: "Home",
              })
            }
          >
            <Text style={styles.menuButtonText}>
              Back to Menu
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flexGrow: 1,
  },

  blueSection: {
    backgroundColor: "#2F67EE",
    paddingTop: 50,
    paddingBottom: 38,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  checkCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 13,
    color: "#DBEAFE",
  },

  orderInfo: {
    marginTop: 22,
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    borderRadius: 18,
    paddingHorizontal: 22,
    paddingVertical: 12,
    gap: 18,
  },

  infoLabel: {
    fontSize: 9,
    color: "#DBEAFE",
  },

  infoValue: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  verticalDivider: {
    width: 1,
    backgroundColor: "rgba(255,255,255,0.4)",
  },

  body: {
    padding: 18,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 10,
  },

  orderCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7EDF5",
    borderRadius: 14,
    padding: 15,
  },

  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  itemText: {
    flex: 1,
    fontSize: 12,
    color: "#334155",
  },

  quantity: {
    color: "#2F67EE",
    fontWeight: "700",
  },

  itemPrice: {
    fontSize: 12,
    color: "#0F172A",
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 5,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  totalLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
  },

  totalPrice: {
    fontSize: 14,
    fontWeight: "800",
    color: "#2F67EE",
  },

  pickupCard: {
    marginTop: 13,
    padding: 14,
    borderRadius: 13,
    backgroundColor: "#F0FDF4",
    borderWidth: 1,
    borderColor: "#BBF7D0",
    flexDirection: "row",
    alignItems: "center",
  },

  locationCircle: {
    width: 36,
    height: 36,
    backgroundColor: "#DCFCE7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  pickupContent: {
    flex: 1,
    marginLeft: 10,
  },

  pickupTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#15803D",
  },

  pickupText: {
    marginTop: 3,
    fontSize: 11,
    color: "#16A34A",
  },

  estimateCard: {
    marginTop: 13,
    padding: 14,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7EDF5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  estimateLabel: {
    fontSize: 11,
    color: "#64748B",
  },

  estimateValue: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },

  clockBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },

  trackButton: {
    height: 54,
    backgroundColor: "#2F67EE",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },

  trackButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  menuButton: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  menuButtonText: {
    fontSize: 12,
    color: "#64748B",
  },
});