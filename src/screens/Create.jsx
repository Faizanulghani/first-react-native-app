import { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Create = ({ data, setData }) => {
  let [itemName, setItemName] = useState('');
  let [stockAmt, setStockAmt] = useState('');
  let [isEdit, setIsEdit] = useState(false);
  let [editId, setEditId] = useState(null);

  let addItemHandler = () => {
    setIsEdit(false);
    let newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmt,
    };
    setData([...data, newItem]);

    setItemName('');
    setStockAmt('');
  };

  let delteItemHandler = id => {
    setData(data.filter(item => item.id !== id));
  };

  let editItemHandler = item => {
    setIsEdit(true);
    setItemName(item.name);
    setStockAmt(item.stock);
    setEditId(item.id);
  };

  let updateItemHandler = () => {
    setData(
      data.map(item =>
        item.id === editId
          ? { ...item, name: itemName, stock: stockAmt }
          : item,
      ),
    );

    setIsEdit(false);
    setItemName('');
    setStockAmt('');
    setEditId(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name..."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setItemName(item)}
      />
      <TextInput
        placeholder="Enter an stock amount..."
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmt}
        onChangeText={item => setStockAmt(item)}
      />

      <Pressable
        style={styles.button}
        onPress={isEdit ? updateItemHandler : addItemHandler}
      >
        <Text style={styles.btnText}>
          {isEdit ? 'Edit Item in Stock' : 'Add Item in Stock'}
        </Text>
      </Pressable>

      <View style={{ marginTop: 10 }}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>All Items in the stock</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BFFF' },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => delteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#D7F6BFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#CABFEEFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: 500,
    fontSize: 14,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 15,
  },
});
