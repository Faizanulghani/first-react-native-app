import { useState } from 'react';
import { View, Image, Text, TextInput, Button } from 'react-native';

const App = () => {
  let [result, setResult] = useState('');
  let [value, setValue] = useState('');

  let handleSubmit = () => {
    setResult(value);
    setValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aur Bhai, KhushAmdeed hai apko</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name..."
        value={value}
        onChangeText={setValue}
      />
      <Button title="Submit" onPress={handleSubmit}></Button>
      {result ? <Text>Result: {result}</Text> : null}
    </View>
  );
};

export default App;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#dadada',
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
};
