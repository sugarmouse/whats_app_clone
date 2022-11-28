import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import ChatScreen from './src/screens/ChatScreen'
import ChatsScreen from './src/screens/ChatsScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChatsScreen /> */}
      <ChatScreen />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
})
