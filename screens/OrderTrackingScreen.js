import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const stages = [
  {
    title: "Order Placed",
    description: "We received your order",
  },
  {
    title: "Preparing",
    description: "Kitchen is preparing your food",
  },
  {
    title: "Ready for Pickup",
    description: "Head to Counter 3",
  },
];

export default function OrderTrackingScreen({ route }) {
  const orderId = route?.params?.orderId || "QB1024";

  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const preparingTimer = setTimeout(() => {
      setCurrentStage(1);
    }, 4000);

    const readyTimer = setTimeout(() => {
      setCurrentStage(2);
    }, 8000);

    return () => {
      clearTimeout(preparingTimer);
      clearTimeout(readyTimer);
    };
  }, []);

  const getStatusMessage = () => {
    if (currentStage === 0) {
      return "Order received";
    }

    if (currentStage === 1) {
      return "Kitchen is preparing your order";
    }

    return "Your order is ready for pickup";
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.pageTitle}>
          Track Order
        </Text>

        {/* ORDER INFO */}
        <View style={styles.orderCard}>
          <View>
            <Text style={styles.orderLabel}>
              ORDER NUMBER
            </Text>

            <Text style={styles.orderNumber}>
              #{orderId}
            </Text>
          </View>

          <View style={styles.pickupInfo}>
            <Text style={styles.orderLabel}>
              EST. PICKUP
            </Text>

            <Text style={styles.pickupTime}>
              ~15 min
            </Text>
          </View>
        </View>

        {/* CURRENT STATUS */}
        <View style={styles.statusBox}>
          <View style={styles.statusDot} />

          <Text style={styles.statusText}>
            {getStatusMessage()}
          </Text>
        </View>

        {/* PROGRESS */}
        <View style={styles.progressCard}>
          <Text style={styles.sectionTitle}>
            Order Progress
          </Text>

          {stages.map((stage, index) => {
            const completed = index < currentStage;
            const active = index === currentStage;
            const future = index > currentStage;

            return (
              <View
                key={stage.title}
                style={styles.stageRow}
              >
                <View style={styles.timelineColumn}>
                  <View
                    style={[
                      styles.stageCircle,
                      completed && styles.completedCircle,
                      active && styles.activeCircle,
                      future && styles.futureCircle,
                    ]}
                  >
                    {completed ? (
                      <Ionicons
                        name="checkmark"
                        size={18}
                        color="#FFFFFF"
                      />
                    ) : active ? (
                      <View style={styles.innerDot} />
                    ) : null}
                  </View>

                  {index < stages.length - 1 && (
                    <View
                      style={[
                        styles.line,
                        index < currentStage
                          ? styles.activeLine
                          : styles.inactiveLine,
                      ]}
                    />
                  )}
                </View>

                <View style={styles.stageContent}>
                  <Text
                    style={[
                      styles.stageTitle,
                      future && styles.futureText,
                    ]}
                  >
                    {stage.title}
                  </Text>

                  <Text
                    style={[
                      styles.stageDescription,
                      future && styles.futureText,
                    ]}
                  >
                    {stage.description}
                  </Text>

                  {!future && (
                    <Text style={styles.stageTime}>
                      {index === 0
                        ? "10:32 AM"
                        : index === 1
                        ? "10:33 AM"
                        : "10:40 AM"}
                    </Text>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        {/* PICKUP LOCATION */}
        <View style={styles.locationCard}>
          <View style={styles.locationIcon}>
            <Ionicons
              name="location-outline"
              size={21}
              color="#2F67EE"
            />
          </View>

          <View style={styles.locationContent}>
            <Text style={styles.locationTitle}>
              Campus Canteen, Block A
            </Text>

            <Text style={styles.locationText}>
              Counter 3 · Show order number #{orderId}
            </Text>
          </View>
        </View>
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
    paddingBottom: 30,
  },

  pageTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 18,
  },

  orderCard: {
    backgroundColor: "#2F67EE",
    borderRadius: 15,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderLabel: {
    fontSize: 10,
    color: "#DBEAFE",
    fontWeight: "600",
  },

  orderNumber: {
    marginTop: 5,
    fontSize: 21,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  pickupInfo: {
    alignItems: "flex-end",
  },

  pickupTime: {
    marginTop: 5,
    fontSize: 17,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  statusBox: {
    marginTop: 15,
    minHeight: 48,
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
    borderRadius: 11,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#93C5FD",
    marginRight: 9,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1D4ED8",
  },

  progressCard: {
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 18,
  },

  stageRow: {
    flexDirection: "row",
    minHeight: 95,
  },

  timelineColumn: {
    width: 34,
    alignItems: "center",
  },

  stageCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  completedCircle: {
    backgroundColor: "#2F67EE",
  },

  activeCircle: {
    backgroundColor: "#EFF6FF",
    borderWidth: 2,
    borderColor: "#2F67EE",
  },

  futureCircle: {
    backgroundColor: "#F1F5F9",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  innerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#93C5FD",
  },

  line: {
    width: 2,
    flex: 1,
    marginVertical: 3,
  },

  activeLine: {
    backgroundColor: "#2F67EE",
  },

  inactiveLine: {
    backgroundColor: "#E2E8F0",
  },

  stageContent: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 16,
  },

  stageTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
  },

  stageDescription: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 16,
    color: "#64748B",
  },

  stageTime: {
    marginTop: 6,
    fontSize: 10,
    color: "#2F67EE",
  },

  futureText: {
    color: "#CBD5E1",
  },

  locationCard: {
    marginTop: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },

  locationIcon: {
    width: 39,
    height: 39,
    borderRadius: 11,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },

  locationContent: {
    flex: 1,
    marginLeft: 11,
  },

  locationTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0F172A",
  },

  locationText: {
    marginTop: 3,
    fontSize: 11,
    color: "#64748B",
  },
});