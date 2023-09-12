import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export default function History({ route, navigation }) {
  const { history } = route.params;

  const ItemSeparator = () => {
    return (
      <View
        style={{ width: "100%", height: 2, backgroundColor: "purple" }}
      ></View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: "blue" }}>History</Text>
      <FlatList
        data={history}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontSize: 18 }}>{item} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

