import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Image
        style={{ width: 400, height: 300 }}
        source={{
          uri: 'https://images.unsplash.com/photo-1753808645481-070fba323120?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <TouchableOpacity
        style={{ padding: 10, backgroundColor: 'green' }}
        onPress={() => Alert.alert('Pressed!!')}
      >
        <Text>Button</Text>
      </TouchableOpacity>
      <Pressable
        style={{ padding: 10, backgroundColor: 'yellow' }}
        onLongPress={() => Alert.alert('Hello')}
      >
        <Text>Press Me!</Text>
      </Pressable>
    </View>
  );
};

export default App;
