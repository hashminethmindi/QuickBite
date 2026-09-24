import { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import menuData from "../data/menuData";
import { useCart } from "../context/CartContext";

const categories = ["All", "Meals", "Beverages", "Snacks"];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { itemCount } = useCart();

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const categoryMatches =
        selectedCategory === "All" ||
        item.category === selectedCategory;

      const searchMatches = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatches && searchMatches;
    });
  }, [search, selectedCategory]);

  const renderFoodItem = ({ item }) => {
    return (
      <Pressable
        style={styles.foodCard}
        onPress={() =>
          navigation.navigate("ItemDetail", {
            item,
          })
        }
      >
        <Image
  source={item.image}
  style={styles.foodImage}
/>

        <View style={styles.foodInfo}>
          <Text
            style={styles.foodName}
            numberOfLines={2}
          >
            {item.name}
          </Text>

          <View style={styles.foodBottom}>
            <Text style={styles.price}>
              Rs. {item.price}
            </Text>

            <View style={styles.addButton}>
              <Ionicons
                name="add"
                size={19}
                color="#FFFFFF"
              />
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}

        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View>
                <Text style={styles.smallGreeting}>
                  Welcome back
                </Text>

                <Text style={styles.title}>
                  QuickBite
                </Text>
              </View>

              <Pressable
                style={styles.cartButton}
                onPress={() =>
                  navigation.navigate("Cart")
                }
              >
                <Ionicons
                  name="bag-outline"
                  size={23}
                  color="#1E293B"
                />

                {itemCount > 0 && (
                  <View style={styles.cartBadge}>
                    <Text style={styles.cartBadgeText}>
                      {itemCount}
                    </Text>
                  </View>
                )}
              </Pressable>
            </View>

            <Text style={styles.subtitle}>
              What would you like to eat today?
            </Text>

            <View style={styles.searchContainer}>
              <Ionicons
                name="search-outline"
                size={20}
                color="#94A3B8"
              />

              <TextInput
                style={styles.searchInput}
                placeholder="Search food..."
                placeholderTextColor="#94A3B8"
                value={search}
                onChangeText={setSearch}
              />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={
                styles.categoriesContainer
              }
            >
              {categories.map((category) => {
                const active =
                  selectedCategory === category;

                return (
                  <Pressable
                    key={category}
                    style={[
                      styles.categoryButton,
                      active &&
                        styles.categoryButtonActive,
                    ]}
                    onPress={() =>
                      setSelectedCategory(category)
                    }
                  >
                    <Text
                      style={[
                        styles.categoryText,
                        active &&
                          styles.categoryTextActive,
                      ]}
                    >
                      {category}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>
                Today's Menu
              </Text>

              <Text style={styles.itemCount}>
                {filteredItems.length} items
              </Text>
            </View>
          </>
        }

        renderItem={renderFoodItem}

        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons
              name="search-outline"
              size={40}
              color="#CBD5E1"
            />

            <Text style={styles.emptyText}>
              No food items found
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 25,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  smallGreeting: {
    fontSize: 12,
    color: "#64748B",
    marginBottom: 3,
  },

  title: {
    fontSize: 27,
    fontWeight: "800",
    color: "#0F172A",
  },

  subtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 7,
    marginBottom: 20,
  },

  cartButton: {
    width: 45,
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  cartBadge: {
    position: "absolute",
    right: -4,
    top: -5,
    minWidth: 19,
    height: 19,
    borderRadius: 10,
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

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 13,
    height: 48,
  },

  searchInput: {
    flex: 1,
    marginLeft: 9,
    fontSize: 14,
    color: "#0F172A",
    outlineStyle: "none",
  },

  categoriesContainer: {
    paddingTop: 17,
    paddingBottom: 21,
    gap: 9,
  },

  categoryButton: {
    paddingHorizontal: 17,
    paddingVertical: 9,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  categoryButtonActive: {
    backgroundColor: "#2F67EE",
    borderColor: "#2F67EE",
  },

  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
  },

  categoryTextActive: {
    color: "#FFFFFF",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
  },

  itemCount: {
    fontSize: 11,
    color: "#94A3B8",
  },

  row: {
    gap: 12,
  },

  foodCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },

  foodImage: {
    width: "100%",
    height: 120,
    backgroundColor: "#E2E8F0",
  },

  foodInfo: {
    padding: 11,
  },

  foodName: {
    minHeight: 36,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "700",
    color: "#0F172A",
  },

  foodBottom: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2F67EE",
  },

  addButton: {
    width: 29,
    height: 29,
    borderRadius: 9,
    backgroundColor: "#2F67EE",
    justifyContent: "center",
    alignItems: "center",
  },

  emptyContainer: {
    alignItems: "center",
    paddingVertical: 50,
  },

  emptyText: {
    marginTop: 10,
    fontSize: 13,
    color: "#94A3B8",
  },
});