import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const List = ({userList}) => {
  console.log('rendering List');

  const renderUser = ({item}) => (
    <Text style={styles.text}>
      {item.name} - {item.username} - {item.email}
    </Text>
  );
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={userList}
        renderItem={renderUser}
      />
    </View>
  );
};

export default React.memo(List);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
  },
  text: {
    fontSize: 25,
  },
});

// address: {street: "Kattie Turnpike", suite: "Suite 198", city: "Lebsackbury", zipcode: "31428-2261", geo: {…}}
// company: {name: "Hoeger LLC", catchPhrase: "Centralized empowering task-force", bs: "target end-to-end models"}
// email: "Rey.Padberg@karina.biz"
// id: 10
// name: "Clementina DuBuque"
// phone: "024-648-3804"
// username: "Moriah.Stanton"
// website: "ambrose.net"
