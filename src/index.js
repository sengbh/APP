import React from 'react'

import AddCity from './AddCity'
import Cities from './Cities'
import City from './City'

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