import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";

export default function CheckoutScreen({ navigation }) {
  const {
    cartItems,
    subtotal,
    clearCart,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("Card");

  const serviceFee = 15;
  const total = subtotal + serviceFee;

  const handlePlaceOrder = () => {
    const orderId =
      "QB" + Math.floor(1000 + Math.random() * 9000);

    const orderedItems = [...cartItems];

    navigation.replace("OrderConfirmation", {
      orderId,
      orderedItems,
      subtotal,
      serviceFee,
      total,
      paymentMethod,
    });

    clearCart();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={22}
            color="#0F172A"
          />
        </Pressable>

        <Text style={styles.headerTitle}>
          Checkout
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* ORDER SUMMARY */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Order Summary
          </Text>

          {cartItems.map((item) => (
            <View
              key={item.id}
              style={styles.orderRow}
            >
              <Text style={styles.orderItem}>
                <Text style={styles.quantity}>
                  {item.quantity}×{" "}
                </Text>
                {item.name}
              </Text>

              <Text style={styles.orderPrice}>
                Rs. {item.price * item.quantity}
              </Text>
            </View>
          ))}

          <View style={styles.divider} />

          <View style={styles.orderRow}>
            <Text style={styles.secondaryText}>
              Service fee
            </Text>

            <Text style={styles.secondaryText}>
              Rs. {serviceFee}
            </Text>
          </View>

          <View style={[styles.orderRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>
              Total
            </Text>

            <Text style={styles.totalPrice}>
              Rs. {total}
            </Text>
          </View>
        </View>

        {/* PICKUP */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Pickup Details
          </Text>

          <View style={styles.pickupRow}>
            <View style={styles.iconBox}>
              <Ionicons
                name="location-outline"
                size={22}
                color="#2F67EE"
              />
            </View>

            <View>
              <Text style={styles.pickupTitle}>
                Campus Canteen, Block A
              </Text>

              <Text style={styles.pickupDescription}>
                Counter 3 · Estimated 15–20 mins
              </Text>
            </View>
          </View>
        </View>

        {/* PAYMENT */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Payment
          </Text>

          <View style={styles.paymentRow}>
            <Pressable
              style={[
                styles.paymentButton,
                paymentMethod === "Card" &&
                  styles.paymentButtonActive,
              ]}
              onPress={() => setPaymentMethod("Card")}
            >
              <Ionicons
                name="card-outline"
                size={23}
                color={
                  paymentMethod === "Card"
                    ? "#2F67EE"
                    : "#94A3B8"
                }
              />

              <Text
                style={[
                  styles.paymentText,
                  paymentMethod === "Card" &&
                    styles.paymentTextActive,
                ]}
              >
                Card
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.paymentButton,
                paymentMethod === "Cash" &&
                  styles.paymentButtonActive,
              ]}
              onPress={() => setPaymentMethod("Cash")}
            >
              <Ionicons
                name="cash-outline"
                size={23}
                color={
                  paymentMethod === "Cash"
                    ? "#2F67EE"
                    : "#94A3B8"
                }
              />

              <Text
                style={[
                  styles.paymentText,
                  paymentMethod === "Cash" &&
                    styles.paymentTextActive,
                ]}
              >
                Cash
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={18}
            color="#2F67EE"
          />

          <Text style={styles.infoText}>
            Show your student ID at pickup. Order ready in
            counter 3.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.placeOrderButton}
          onPress={handlePlaceOrder}
        >
          <Text style={styles.placeOrderText}>
            Place Order — Rs. {total}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    height: 80,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },

  backButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: 21,
    fontWeight: "700",
    color: "#0F172A",
    marginLeft: 7,
  },

  content: {
    padding: 16,
    paddingBottom: 110,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 14,
  },

  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  orderItem: {
    flex: 1,
    fontSize: 12,
    color: "#334155",
  },

  quantity: {
    color: "#2F67EE",
    fontWeight: "700",
  },

  orderPrice: {
    fontSize: 12,
    color: "#0F172A",
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginBottom: 12,
  },

  secondaryText: {
    fontSize: 12,
    color: "#64748B",
  },

  totalRow: {
    marginBottom: 0,
    marginTop: 4,
  },

  totalLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },

  totalPrice: {
    fontSize: 15,
    fontWeight: "800",
    color: "#2F67EE",
  },

  pickupRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  pickupTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
  },

  pickupDescription: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 3,
  },

  paymentRow: {
    flexDirection: "row",
    gap: 10,
  },

  paymentButton: {
    flex: 1,
    height: 78,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#D8E0EC",
    justifyContent: "center",
    alignItems: "center",
  },

  paymentButtonActive: {
    borderColor: "#2F67EE",
    backgroundColor: "#EFF6FF",
  },

  paymentText: {
    marginTop: 7,
    fontSize: 12,
    color: "#64748B",
  },

  paymentTextActive: {
    color: "#2F67EE",
    fontWeight: "600",
  },

  infoBox: {
    flexDirection: "row",
    backgroundColor: "#EFF6FF",
    padding: 13,
    borderRadius: 11,
    alignItems: "flex-start",
  },

  infoText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 11,
    lineHeight: 16,
    color: "#2F67EE",
  },

  bottomContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },

  placeOrderButton: {
    height: 54,
    backgroundColor: "#2F67EE",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },

  placeOrderText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});