/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decremented, incremented} from './src/redux/slice/CounterSlice';

const App = () => {
  const dispatch = useDispatch();

  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1,
  };

  const value = useSelector(state => {
    return state.counter.value;
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Text style={styles.text} children={'Count Value ' + value} />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title={'Increment'}
            color={'green'}
            onPress={() => dispatch(incremented())}
          />
          <Button
            style={styles.button}
            color={'red'}
            title={'Decrement'}
            onPress={() => dispatch(decremented())}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    color: 'green',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'white',
  },
});

export default App;
