import { View, Image, Text, FlatList } from 'react-native';

const App = () => {
  const dummy = [
    {
      id: 1,
      name: 'Ali Raza',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 2,
      name: 'Sara Khan',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 3,
      name: 'Usman Tariq',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 4,
      name: 'Ayesha Malik',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 5,
      name: 'Zain Ahmed',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 6,
      name: 'Hira Sheikh',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 7,
      name: 'Bilal Aslam',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 8,
      name: 'Mariam Iqbal',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 9,
      name: 'Hamza Shahid',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 10,
      name: 'Iqra Yousaf',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 11,
      name: 'Farhan Ali',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 12,
      name: 'Noor Fatima',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 13,
      name: 'Tahir Javed',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 14,
      name: 'Zoya Mirza',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 15,
      name: 'Danish Khan',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 16,
      name: 'Huma Nadeem',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 17,
      name: 'Shayan Akram',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 18,
      name: 'Nimra Abbas',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 19,
      name: 'Faizan Qureshi',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 20,
      name: 'Mehwish Rafiq',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 21,
      name: 'Omer Aziz',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
    {
      id: 22,
      name: 'Rida Naeem',
      image:
        'https://images.unsplash.com/profile-1716316541074-00a45026d86e?w=150&dpr=1&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              style={{ width: 48, height: 48, borderRadius: 50 }}
              source={{
                uri: item.image,
              }}
            />
            <View style={{ alignItems: 'center' }}>
              <Text>{item.name}</Text>
              <Text>email</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
        numColumns={3}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default App;

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dadada',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
