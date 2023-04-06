import React from 'react';
import { Text, View, Image } from 'react-native';


const ListHeader = () => {
  return (
    <View style={{ marginBottom: 10}}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', margin: 2 }}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/709/709873.png',
          }}
          style={{ width: 30, height: 30}}
        />
        Tareas
      </Text>
    </View>
  );
};

export default ListHeader;
