import React from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, TouchableOpacity, Text} from 'react-native';
import {List} from 'react-native-paper';

function Todo({id, title, complete}) {
  async function toggleComplete() {
    await firestore().collection('todos').doc(id).update({
      complete: !complete,
    });
  }

  return (
    <View>
      <TouchableOpacity onPress={() => toggleComplete()}>
        <Text>title={title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(Todo);
