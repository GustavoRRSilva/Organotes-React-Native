import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const BottomTabMenu = () => {
  const [activeTab, setActiveTab] = useState("calendar"); // Tab ativo inicial

  const tabs = [
    {
      id: "home",
      icon: "🏠",
      label: "Home",
    },
    {
      id: "add",
      icon: "+",
      label: "Adicionar",
    },
    {
      id: "calendar",
      icon: "📅",
      label: "Calendário",
    },
  ];

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
    // Aqui você pode adicionar navegação ou lógica específica
    console.log(`Tab selecionada: ${tabId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tabButton,
              activeTab === tab.id && styles.activeTabButton,
            ]}
            onPress={() => handleTabPress(tab.id)}
            activeOpacity={0.7}
          >
            <View
              style={[
                styles.iconContainer,
                activeTab === tab.id && styles.activeIconContainer,
                tab.id === "add" && styles.addButtonContainer,
                tab.id === "add" &&
                  activeTab === "add" &&
                  styles.activeAddButtonContainer,
              ]}
            >
              <Text
                style={[
                  styles.icon,
                  activeTab === tab.id && styles.activeIcon,
                  tab.id === "add" && styles.addIcon,
                  tab.id === "add" &&
                    activeTab === "add" &&
                    styles.activeAddIcon,
                ]}
              >
                {tab.icon}
              </Text>
            </View>
            <Text
              style={[styles.label, activeTab === tab.id && styles.activeLabel]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    zIndex: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 8,
  },
  activeTabButton: {
    // Estilo adicional para tab ativo se necessário
  },
  iconContainer: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  activeIconContainer: {
    // Estilo para container do ícone ativo
  },
  addButtonContainer: {
    backgroundColor: "#007AFF",
    width: 36,
    height: 36,
    borderRadius: 18,
    marginBottom: 4,
  },
  activeAddButtonContainer: {
    backgroundColor: "#0056CC",
  },
  icon: {
    fontSize: 20,
    color: "#999",
  },
  activeIcon: {
    color: "#007AFF",
  },
  addIcon: {
    fontSize: 24,
    color: "#fff",
    lineHeight: 24,
  },
  activeAddIcon: {
    color: "#fff",
  },
  label: {
    fontSize: 10,
    color: "#999",
    textAlign: "center",
    fontWeight: "500",
  },
  activeLabel: {
    color: "#007AFF",
    fontWeight: "600",
  },
});

export default BottomTabMenu;
