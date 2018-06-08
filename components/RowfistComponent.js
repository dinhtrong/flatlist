import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class RowfistComponent extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginRight: 10 }}>{this.props.item.status ? "ẢNH XUỐNG" : "ẢNH LÊN"}</Text>
                <Text>{this.props.item.title}</Text>
            </View>
        );
    }
}