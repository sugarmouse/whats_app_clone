import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    console.warn("send a message", newMessage);
    setNewMessage("");
  };

  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput
        style={styles.input}
        value={newMessage}
        onChangeText={setNewMessage}
        multiline
      />
      <MaterialIcons
        style={styles.send}
        name="send"
        size={24}
        color="white"
        onPress={onSend}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    alignItems: "center",
  },
  input: {
    fontSize: 18,

    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default InputBox;
