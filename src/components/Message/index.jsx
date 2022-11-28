import { View, Text, StyleSheet } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const isMessage = () => {
    return message.user.id === "u1";
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMessage() ? "#DCF8C5" : "white",
          alignSelf: isMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",

    // shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },

  message: {},
  time: {
    alignSelf: "flex-end",
    color: "grey",
  },
});

export default Message;
