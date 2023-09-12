import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function Calculator({navigation}) {
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const handleOnClick = (operator) => {
    const num1 = parseInt(number);
    const num2 = parseInt(number2);

    let calculatedResult;
    if (operator === "+") {
      calculatedResult = num1 + num2;
    } else {
      calculatedResult = num1 - num2;
    }
    setHistory([
      `${num1} ${operator} ${num2} = ${calculatedResult}`,
      ...history,
    ]);
    setNumber("");
    setNumber2("");
    setResult(calculatedResult.toString());
  };

 
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: "purple", margin: 100 }}>
        Result: {result}{" "}
      </Text>
      <StatusBar style="auto" />

      <TextInput
        keyboardType="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(number) => setNumber(number)}
        value={number}
      />

      <TextInput
        keyboardType="numeric"
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(number2) => setNumber2(number2)}
        value={number2}
      />
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Button onPress={() => handleOnClick("+")} title="+" />
        <Button onPress={() => handleOnClick("-")} title="-" />
        <Button
          title="History"
          onPress={() => {
            navigation.navigate("History", { history });
          }}
        />
      </View>
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
