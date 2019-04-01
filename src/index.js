import React from 'react'

import AddCity from './AddCity/AddCity'
import Cities from './Cities/Cities'
import City from './Cities/City'

import {colors} from './theme'

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import { conditionalExpression } from '@babel/types';

const CitiesNav = createStackNavigator({
    Cities: {screen: Cities}, 
    City: {screen: City}
},{
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#8B0000'
        }, 
        headerTintColor: '#fff'
    }
})

const Tabs = createBottomTabNavigator({
    Cities: {screen: CitiesNav},
    AddCity: {screen: AddCity} 
})

export default Tabs