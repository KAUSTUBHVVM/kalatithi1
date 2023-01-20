import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
  ImageBackground,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View style={styles.home}>
          <ImageBackground
            source={require('../assets/bg.jpg')}
            resizeMode="contain"
            style={styles.imagebg}>
            <View style={styles.buttonsContainer}>
              <View style={styles.innerbox}>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('Science')}>
                  <Text style={styles.buttontext}>Jan</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('Math')}>
                  <Text style={styles.buttontext}>Feb</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('Nature')}>
                  <Text style={styles.buttontext}>Mar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.innerbox}>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('Funny')}>
                  <Text style={styles.buttontext}>Apr</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('May')}>
                  <Text style={styles.buttontext}>May</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('June')}>
                  <Text style={styles.buttontext}>June</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.innerbox}>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('July')}>
                  <Text style={styles.buttontext}>July</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('August')}>
                  <Text style={styles.buttontext}>Aug</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('September')}>
                  <Text style={styles.buttontext}>Sept</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.innerbox}>
                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('October')}>
                  <Text style={styles.buttontext}>Oct</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('November')}>
                  <Text style={styles.buttontext}>Nov</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate('December')}>
                  <Text style={styles.buttontext}>Dec</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.ratingContainer}>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttontext:{ 
   fontSize: 20,
   color: 'black',
   fontWeight:'bold' 
   },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  innerbox: {
    flex: 1,
    flexDirection: 'row',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#f26fa6',
    margin: 10,
    width: 80,
    height: 100,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  imagebg: {
    flex: 1,
    justifyContent: 'centre',
    alignItems: 'center',
    width:'100%',
    height:'100%'
  },
});
