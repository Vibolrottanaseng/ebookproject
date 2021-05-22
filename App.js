/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  // Text,
  // useColorScheme,
  // View,
  KeyboardAvoidingView,
  Dimensions,
  Image,
} from 'react-native';

const dev_height = Dimensions.get('window').height;
const dev_width = Dimensions.get('window').width;

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ height: dev_height, width: dev_width }}>
        <View style={{ height: "13%", width: "100%", marginTop: "6%", justifyContent: "center" }}>
          <Image source={require("./book.jpeg")} style={{ height: "90%", width: "20%", marginLeft: "4%" }} />
        </View>
      </KeyboardAvoidingView>
    )
  }
}
