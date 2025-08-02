import {
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Pressable,
  SafeAreaView,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>App</Text>
      <Image
        style={{ width: 400, height: 300 }}
        source={{
          uri: 'https://images.unsplash.com/photo-1753808645481-070fba323120?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Pressed!!')}
      >
        <Text style={styles.btnText}>Button</Text>
      </TouchableOpacity>
      <Pressable
        style={{ padding: 10, backgroundColor: 'yellow' }}
        onLongPress={() => Alert.alert('Hello')}
      >
        <Text>Press Me!</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  button: {
    padding: 10,
    backgroundColor: '#666',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
};
