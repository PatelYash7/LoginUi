import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './Components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
      <StatusBar barStyle="dark-content" backgroundColor="#F6F9FB" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
