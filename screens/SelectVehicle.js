import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet} from 'react-native';
import Search from '../components/Search';

const windowHeigth = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class SelectVehicle extends React.Component {
  constructor(props) {
    super(props);
  }
  _onBikeClick = () => {
    this.props.navigation.navigate('Bike');
  }
  _onCarClick = () => {
    this.props.navigation.navigate('Car');
  }
  render() {
    return (
      <View
        style={styles.container}>
          <Search width={windowWidth} />
        <TouchableOpacity style={styles.button} onPress={this._onCarClick} >
          <Image style={styles.image} source={require('../assets/car.png')} />
          <Text style={styles.buttonText} >Car</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this._onBikeClick} >
          <Image style={styles.image} source={require('../assets/bike.png')} />
          <Text style={styles.buttonText} >Bike</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SelectVehicle;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: windowWidth * 0.5, 
    height: windowWidth * 0.5, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    padding: 10, 
    borderRadius: 20, 
    margin: windowWidth * 0.1
  },
  image: {
    width: windowWidth * 0.3, 
    height: windowWidth * 0.3
  },
  buttonText: {
    fontSize: windowHeigth * 0.03
  }
})