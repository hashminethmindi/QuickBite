import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";

export default function ItemDetailScreen({ route, navigation }) {
  const { item } = route.params;

  const [quantity, setQuantity] = useState(1);

  const { addToCart, itemCount } = useCart();

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
    navigation.navigate("Cart");
  };

  const totalPrice = item.price * quantity;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* IMAGE SECTION */}
        <View style={styles.imageContainer}>
          <Image
  source={item.image}
  style={styles.foodImage}
/>

          {/* BACK BUTTON */}
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

          {/* CART BUTTON */}
          <Pressable
            style={styles.cartButton}
            onPress={() => navigation.navigate("Cart")}
          >
            <Ionicons
              name="bag-outline"
              size={21}
              color="#0F172A"
            />

            {itemCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>
                  {itemCount}
                </Text>
              </View>
            )}
          </Pressable>

          <View style={styles.categoryBadge}>
            <Text style={styles.categoryBadgeText}>
              {item.category}
            </Text>
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              Rs. {item.price}
            </Text>
          </View>

          <Text style={styles.description}>
            {item.description}
          </Text>

          {/* TAGS */}
          <View style={styles.tagsContainer}>
            {item.tags?.map((tag) => (
              <View
                key={tag}
                style={styles.tag}
              >
                <Text style={styles.tagText}>
                  {tag}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.divider} />

          <Text style={styles.quantityTitle}>
            Quantity
          </Text>

          <View style={styles.quantitySection}>
            <Pressable
              style={styles.quantityButtonSecondary}
              onPress={decreaseQuantity}
            >
              <Text style={styles.quantityButtonSecondaryText}>
                −
              </Text>
            </Pressable>

            <Text style={styles.quantityText}>
              {quantity}
            </Text>

            <Pressable
              style={styles.quantityButtonPrimary}
              onPress={increaseQuantity}
            >
              <Text style={styles.quantityButtonPrimaryText}>
                +
              </Text>
            </Pressable>

            <Text style={styles.calculationText}>
              × Rs. {item.price} ={" "}
              <Text style={styles.calculationTotal}>
                Rs. {totalPrice}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* BOTTOM BUTTON */}
      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.addToCartButton}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>
            Add to Cart — Rs. {totalPrice}
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

  scrollContent: {
    paddingBottom: 110,
  },

  imageContainer: {
    height: 310,
    position: "relative",
    backgroundColor: "#E2E8F0",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  backButton: {
    position: "absolute",
    top: 22,
    left: 18,
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  cartButton: {
    position: "absolute",
    top: 22,
    right: 18,
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  cartBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#2F67EE",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  cartBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },

  categoryBadge: {
    position: "absolute",
    bottom: 15,
    left: 18,
    backgroundColor: "#2F67EE",
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 20,
  },

  categoryBadgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
  },

  content: {
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },

  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "800",
    color: "#0F172A",
  },

  price: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2F67EE",
  },

  description: {
    marginTop: 13,
    fontSize: 14,
    lineHeight: 21,
    color: "#64748B",
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 16,
  },

  tag: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  tagText: {
    fontSize: 11,
    color: "#2F67EE",
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 22,
  },

  quantityTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 12,
  },

  quantitySection: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityButtonSecondary: {
    width: 42,
    height: 42,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  quantityButtonSecondaryText: {
    fontSize: 22,
    color: "#475569",
  },

  quantityText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginHorizontal: 10,
  },

  quantityButtonPrimary: {
    width: 42,
    height: 42,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2F67EE",
  },

  quantityButtonPrimaryText: {
    fontSize: 23,
    color: "#FFFFFF",
    fontWeight: "600",
  },

  calculationText: {
    marginLeft: 10,
    fontSize: 12,
    color: "#64748B",
  },

  calculationTotal: {
    fontWeight: "700",
    color: "#0F172A",
  },

  bottomContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },

  addToCartButton: {
    height: 54,
    borderRadius: 11,
    backgroundColor: "#2F67EE",
    justifyContent: "center",
    alignItems: "center",
  },

  addToCartText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});