import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet,Image } from 'react-native';

export default class August extends Component {
  render() {
    return (
      <View>
              <Image source={require('../assets/h3.png')} style={{   
     width: 333,
    height: 106,
    alignItems: 'centre',}} />
          <Image
           source={require('../assets/08cal.jpg')}
            resizeMode="cover"
            style={styles.container}>
            </Image>
         <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('HomeScreen')}>
                  <Text style={styles.buttontext}>Back</Text>
                </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{ 
marginTop:10,
    width:330,
    height:530
    },
     buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#f26fa6',
    marginLeft: 105,
    marginTop: 10,
    width: 130,
    height: 50,
    }
})