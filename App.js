/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, 
          createAppContainer 
      } from "react-navigation";

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
}); */
import Tabs from './src'
import City from './src/Cities/City';

export default class App extends Component {
  state = {
    cities: []
  }
  addCity = () => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({cities})
  }
  addLocation = () =>{

  }
  render() {
    return (
    <Tabs
      screenProps={{
        cities: this.state.cities, 
        addCity: this.addCity
      }}
     />
    )
  }
}

/*const styles = StyleSheet.create({
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
}); */
