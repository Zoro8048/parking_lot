import React from 'react';
import {View, Text, TextInput, Modal, Dimensions, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {parking} from '../appState/actions';

const windowHeigth = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleNumber: '',
        }
    }

    _saveVehicle = () => {
        if(this.props.parkList.length !=0) {
            var x = false;
            this.props.parkList.find(a => a.includes(this.state.vehicleNumber) ? x = true : x);
            if(x) {
                alert('Vehicle with vehicle number "' + this.state.vehicleNumber + '" is already parked');
                return;
            }
        }
        var x = this.props.slot + "_" +this.props.type + "_" + this.state.vehicleNumber;
        this.props.addParking(x);
        this.props._closeForm();
    }

    render() {
        return(
            <Modal
                transparent={true}
            >
                <View style={{flex: 1, marginTop: windowHeigth * 0.2, marginBottom: windowHeigth * 0.2, backgroundColor: 'white', elevation: 50, marginLeft: windowWidth * 0.1, marginRight: windowWidth * 0.1, alignItems: 'center', justifyContent: 'space-between', padding: 10}} >
                    <View style={{flexDirection: 'row-reverse', width: windowWidth * 0.75}} >
                        <TouchableOpacity style={{marginRight: 10}} onPress={() => this.props._closeForm()} >
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput placeholder="Vehicle Number" value={this.state.vehicleNumber} onChangeText={(vehicleNumber) => this.setState({vehicleNumber})} style={{borderWidth: 1, margin: 20, paddingLeft: 10, borderRadius: 10, width: windowWidth * 0.7}} />
                    <TouchableOpacity disabled={this.state.vehicleNumber.length == 0} style={{width: windowWidth * 0.4, height: windowHeigth * 0.08, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center', borderRadius: 15}} onPress={() => this._saveVehicle()} >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addParking: (vehicleNumber) => dispatch(parking(vehicleNumber))
    }
}

function mapStateToProps(state) {
    return {
        parkList: state.parking
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form)