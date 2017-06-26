/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import RNGooglePlacePicker from 'react-native-google-place-picker';

export default class GooglePlacePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null
    }
  }

  onPress() {
    RNGooglePlacePicker.show((response) => {
      console.log(response);
      if (response.didCancel) {
        console.log('User cancelled GooglePlacePicker');
      }
      else if (response.error) {
        console.log('GooglePlacePicker Error: ', response.error);
      }
      else {
        this.setState({
          location: response
        });
      }
    })
  }
  render() {
    return (
       <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress.bind(this)}>
          <Text style={{color: '#72c02c', fontSize: 20, fontWeight:'bold'}}>
            Click me to push Google Place Picker!
          </Text>
        </TouchableOpacity>
        <View style={styles.location}>
          <Text style={{color: 'black', fontSize: 15}}>
            {JSON.stringify(this.state)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GooglePlacePicker', () => GooglePlacePicker);
