/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ExpanableList from 'react-native-expandable-section-flatlist';
import RowfistComponent from './components/RowfistComponent';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
         <ExpanableList
          dataSource={MockData}
          headerKey="header"
          memberKey="member"
          headerOnPress={this._headerOnPress}
          renderRow={this._renderRow}
          renderSectionHeaderX={this._renderSection}
        />
      </View>
    );
  }
  _renderRow = (rowItem, rowId, sectionId) => <Text>{rowItem.title}</Text>;
  _renderSection = (section, sectionId)  => <RowfistComponent item={section}/>;
  _headerOnPress = (sectionId) => MockData[sectionId].header.status = !MockData[sectionId].header.status;
}


const MockData = [
  {
      header: {
        status: false,
        title: "sectionHeader2"
      },
      member: [
          {
              title: 'memberTitle',
              content: 'content',
          },
          {
            title: 'memberTitle',
            content: 'content',
        },
        {
          title: 'memberTitle',
          content: 'content',
      },
      ]
  },
  {
    header:{
      status: false,
      title: "sectionHeader2"
    },
    member: [
        {
            title: 'memberTitle',
            content: 'content',
        },
        {
          title: 'memberTitle',
          content: 'content',
      },
    ]
  },
  {
    header:{
      status: false,
      title: "sectionHeader2"
    },
    member: [
        {
            title: 'memberTitle',
            content: 'content',
        },
        {
          title: 'memberTitle',
          content: 'content',
      },
      {
        title: 'memberTitle',
        content: 'content',
      },
    ]
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
