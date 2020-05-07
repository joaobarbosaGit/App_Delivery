import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default class HomeList extends Component {
    constructor(props)
    static navigationOptions = {
        title:'Spetaria do Coruja',
    }

    render(){
        return(
            <View>
                <FlatList
                data={this.state.list}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    conteiner:{

    }
});