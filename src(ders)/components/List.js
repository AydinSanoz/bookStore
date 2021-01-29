import React from 'react';
import {View, Text, ScrollView} from 'react-native';

const List = ({userList}) => {
  console.log('rendering List');
  return (
    <ScrollView>
      {userList.map((user) => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </ScrollView>
  );
};

export default React.memo(List);
