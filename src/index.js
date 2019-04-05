import React from 'react'

import AddCity from './AddCity/AddCity'
import Cities from './Cities/Cities'
import City from './Cities/City'

import {colors} from './theme'

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import { conditionalExpression } from '@babel/types';

const CitiesNav = createStackNavigator({
    Cities: {screen: Cities}, 
    City: {screen: City},
    AddCity: {screen: AddCity}
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        }, 
        headerTintColor: '#fff'
    }
});

const Tabs = createBottomTabNavigator(CitiesNav);

export default Tabs;