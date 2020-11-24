import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from '@template/redux-store'
import { Provider } from 'react-redux'

const template_store = store()

console.log('########## store', template_store)

export default function App() {
  return (
    <Provider store={template_store}>
      <View style={styles.container}>
        <Text>
          This is expo app
        </Text>
      </View>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
