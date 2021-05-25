import React from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  // Text,
  // useColorScheme,
  View,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';

const dev_height = Dimensions.get('window').height;
const dev_width = Dimensions.get('window').width;

import { ProgressBar } from "react-native-paper"

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ height: dev_height, width: dev_width }}>
        <View style={{ height: "13%", width: "100%", marginTop: "6%", justifyContent: "center" }}>
          <Image source={require('./book.jpeg')} style={{ height: "90%", width: "20%", marginLeft: "4%" }} />
        </View>


        <View style={{ height: "8%", width: "100%" }}>
          <Text style={{ color: "#3C3D59", fontweight: "bold", marginleft: "8%" }}> STEP 1 OF 3 </Text>
          <ProgressBar progres={0, 3} color="#3C3D59" style={{ width: "80%", marginTop: "3%", marginLeft: "8%" }} />
        </View>

        <View style={{ height: "6%", width: "100" }}>
          <Text styel={{ fontsize: 30, color: "#3C3D59", fontweight: "bold", marginLeft: "8%" }}>Log In</Text>
        </View>



        <View style={{ height: "18%", width: "100%", alignItems: "center", marginTop: "5%" }}>
          <TextInput
            style={{
              height: '45%',
              width: '80%',
              backgroundColor: '#F9FAF8',
              borderRadius: 10,
              paddingHorizontal: 20,
              color: '#9DA9B8'

            }}
            placeholder='Name'
          />

          <TextInput
            style={{
              height: "45%",
              width: "80%",
              backgroundColor: "#F9FAF8",
              borderRadius: 10,
              paddingHorizontal: 20,
              color: "#9DA9B8",
              marginTop: "5%"
            }}
            placeholder="Password"
          />

        </View>
      </KeyboardAvoidingView>
    )
  }
}
