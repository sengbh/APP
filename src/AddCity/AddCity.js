import React from 'react'
import{
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

import uuidV4 from 'uuid/v4'
import {colors} from '../theme'
import { HeaderStyleInterpolator } from 'react-navigation';

export default class AddCity extends React.Component {
    state = {
        city: '',
        country: ''
    }
    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }
    submit = () => {

    }
    render() {
        return (
            <View style={style.container}>
                <TextInput
                    placeholder='City name'
                    value={this.state.city}
                    onChangeText ={val => this.onChangeText('city', val)}
                    style={style.input}
                />
                <TextInput
                    placeholder='City name'
                    value={this.state.city}
                    onChangeText ={val => this.onChangeText('country', val)}
                    style={style.input}
                />
                <TouchableOpacity onPress={this.submit}>
                    <View style = {style.button}>
                        <Text style = {style.buttonText}>
                            Add City
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    input: {
        backgroundColor: 'white', 
        margin: 10,
        paddingHorizontal: 8,
        height: 50
    }, 
    button: {
        height: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white'
    }, 
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    }, 
    heading: {}
})