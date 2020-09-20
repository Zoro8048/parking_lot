import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {parking} from '../appState/actions';

var location_of_vehicle = '', lenght_of_park = 0;
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleNumber: ''
        }
    }

    _searchVehicle = () => {
        if(this.props.parkList.length == 0) {
            alert('No vehicles are parked');
            this.setState({vehicleNumber: ''});
            return;
        }
        location_of_vehicle = '';
        this.props.parkList.find(a => {
            var y = a.split("_");
            if(y[2] === this.state.vehicleNumber) {
                location_of_vehicle = a;
            }
        });
        if(location_of_vehicle === '')
        {
            alert('Entered vehicle number is not parked');
            this.setState({vehicleNumber: ''});
        }
        else
        {
            var detailedList = location_of_vehicle.split("_");
            alert('Entered vehicle is present at ' + detailedList[0] + ' in ' + detailedList[1] + ' category');
            detailedList = [];
            this.setState({vehicleNumber: ''});
        }
    }

    render() {
        return(
            <View style={{flexDirection: 'row', justifyContent: 'space-around', width: this.props.width}} >
                <TextInput placeholder="Enter vechicle number to search" value={this.state.vehicleNumber} onChangeText={(vehicleNumber) => this.setState({vehicleNumber})} style={{borderWidth: 1, width: this.props.width * 0.7 ,borderRadius: 10, paddingLeft: 10}} />
                <TouchableOpacity disabled={this.state.vehicleNumber.length == 0} style={{backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', width: this.props.width * 0.15}} onPress={this._searchVehicle} >
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        parkList: state.parking
    }
}

export default connect(mapStateToProps)(Search);