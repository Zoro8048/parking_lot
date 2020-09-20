import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const windowHeigth = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

class ParkOption extends React.Component {
    render() {
        return(
            <View style={{flexDirection: 'row', width: windowWidth, justifyContent: 'center', alignItems: 'center', marginTop: 3,}} >
                <View style={{flexDirection: 'row'}} >
                    <View style={{height: 20, width: 20 ,backgroundColor: 'lightgreen'}} />
                    <Text>{" "}Available{" "}</Text>
                </View>
                <View style={{flexDirection: 'row'}} >
                    <View style={{height: 20, width: 20 ,backgroundColor: 'red'}} />
                    <Text>{" "}Parked{" "}</Text>
               </View>
            </View>
        )
    }
}

export default ParkOption;