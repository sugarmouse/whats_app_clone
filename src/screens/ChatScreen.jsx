import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import InputBox from "../components/InputBox";
import messages from "../../assets/data/messages.json";

const renderItem = (message) => {
  return <Message message={message.item} />;
};

const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        style={{ padding: 10 }}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});

export default ChatScreen;
