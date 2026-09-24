import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";

export default function CartScreen({ navigation }) {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    subtotal,
    itemCount,
  } = useCart();

  const serviceFee = cartItems.length > 0 ? 15 : 0;
  const total = subtotal + serviceFee;

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image
  source={item.image}
  style={styles.foodImage}
/>

      <View style={styles.itemInfo}>
        <Text
          style={styles.itemName}
          numberOfLines={1}
        >
          {item.name}
        </Text>

        <Text style={styles.itemPrice}>
          Rs. {item.price}
        </Text>
      </View>

      <View style={styles.quantityArea}>
        <Pressable
          style={styles.smallButton}
          onPress={() => decreaseQuantity(item.id)}
        >
          <Text style={styles.smallButtonText}>−</Text>
        </Pressable>

        <Text style={styles.quantity}>
          {item.quantity}
        </Text>

        <Pressable
          style={styles.plusButton}
          onPress={() => increaseQuantity(item.id)}
        >
          <Text style={styles.plusButtonText}>+</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.deleteButton}
        onPress={() => removeFromCart(item.id)}
      >
        <Ionicons
          name="trash-outline"
          size={18}
          color="#94A3B8"
        />
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
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
          My Cart
        </Text>

        <Text style={styles.itemCount}>
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </Text>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIcon}>
            <Ionicons
              name="bag-outline"
              size={38}
              color="#2F67EE"
            />
          </View>

          <Text style={styles.emptyTitle}>
            Your cart is empty
          </Text>

          <Text style={styles.emptyText}>
            Add something from the menu to get started.
          </Text>

          <Pressable
            style={styles.browseButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.browseButtonText}>
              Browse Menu
            </Text>
          </Pressable>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={renderCartItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            ListFooterComponent={
              <>
                {/* ORDER SUMMARY */}
                <View style={styles.summaryCard}>
                  <Text style={styles.summaryTitle}>
                    Order Summary
                  </Text>

                  <View style={styles.summaryRow}>
                    <View>
                      <Text style={styles.summaryLabel}>
                        Subtotal
                      </Text>
                      <Text style={styles.summaryValue}>
                        Rs. {subtotal}
                      </Text>
                    </View>

                    <View>
                      <Text style={styles.summaryLabel}>
                        Service fee
                      </Text>
                      <Text style={styles.summaryValue}>
                        Rs. {serviceFee}
                      </Text>
                    </View>

                    <View>
                      <Text style={styles.totalLabel}>
                        Total
                      </Text>
                      <Text style={styles.totalValue}>
                        Rs. {total}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* PICKUP */}
                <View style={styles.pickupCard}>
                  <View style={styles.locationIcon}>
                    <Ionicons
                      name="location-outline"
                      size={21}
                      color="#2F67EE"
                    />
                  </View>

                  <View style={styles.pickupContent}>
                    <Text style={styles.pickupTitle}>
                      Pickup at Campus Canteen
                    </Text>

                    <Text style={styles.pickupText}>
                      Ready in approx. 15–20 minutes after ordering
                    </Text>
                  </View>
                </View>
              </>
            }
          />

          {/* CHECKOUT */}
          <View style={styles.bottomContainer}>
            <Pressable
              style={styles.checkoutButton}
              onPress={() =>
                navigation.navigate("Checkout")
              }
            >
              <Text style={styles.checkoutButtonText}>
                Checkout — Rs. {total}
              </Text>
            </Pressable>
          </View>
        </>
      )}
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
    marginLeft: 5,
  },

  itemCount: {
    marginLeft: "auto",
    fontSize: 12,
    color: "#64748B",
  },

  listContent: {
    padding: 16,
    paddingBottom: 110,
  },

  cartItem: {
    minHeight: 82,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E7EDF5",
    padding: 10,
    marginBottom: 11,
    flexDirection: "row",
    alignItems: "center",
  },

  itemImage: {
    width: 58,
    height: 58,
    borderRadius: 10,
    backgroundColor: "#E2E8F0",
  },

  itemInfo: {
    flex: 1,
    marginLeft: 10,
  },

  itemName: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
  },

  itemPrice: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "700",
    color: "#2F67EE",
  },

  quantityArea: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 6,
  },

  smallButton: {
    width: 29,
    height: 29,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D8E0EC",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  smallButtonText: {
    fontSize: 17,
    color: "#475569",
  },

  quantity: {
    minWidth: 24,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
  },

  plusButton: {
    width: 29,
    height: 29,
    borderRadius: 8,
    backgroundColor: "#2F67EE",
    justifyContent: "center",
    alignItems: "center",
  },

  plusButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },

  deleteButton: {
    marginLeft: 8,
    padding: 5,
  },

  summaryCard: {
    marginTop: 6,
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },

  summaryTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 15,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  summaryLabel: {
    fontSize: 11,
    color: "#64748B",
  },

  summaryValue: {
    marginTop: 3,
    fontSize: 13,
    fontWeight: "600",
    color: "#0F172A",
  },

  totalLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#0F172A",
  },

  totalValue: {
    marginTop: 3,
    fontSize: 15,
    fontWeight: "800",
    color: "#2F67EE",
  },

  pickupCard: {
    marginTop: 14,
    padding: 14,
    backgroundColor: "#EFF6FF",
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
  },

  locationIcon: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  pickupContent: {
    marginLeft: 10,
    flex: 1,
  },

  pickupTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#2F67EE",
  },

  pickupText: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 3,
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

  checkoutButton: {
    height: 54,
    backgroundColor: "#2F67EE",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },

  checkoutButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  emptyIcon: {
    width: 72,
    height: 72,
    borderRadius: 22,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
    marginTop: 18,
  },

  emptyText: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 7,
    textAlign: "center",
  },

  browseButton: {
    marginTop: 20,
    backgroundColor: "#2F67EE",
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderRadius: 10,
  },

  browseButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});