import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import InputBox from "../components/InputBox";
import messages from "../../assets/data/messages.json";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";

const renderItem = (message) => {
  return <Message message={message.item} />;
};

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // display name on the top bar
  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          style={{ padding: 10 }}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});

export default ChatScreen;
