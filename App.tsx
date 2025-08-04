import { View, SafeAreaView, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView
    contentContainerStyle={{gap:10}}
    horizontal
    style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </ScrollView>
  );
};

export default App;

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding:10,
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius:50
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    borderRadius:50
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderRadius:50
  },
};
