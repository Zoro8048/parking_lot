import React from 'react';
import {View, FlatList, Text, Dimensions, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ParkOption from '../components/ParkOption'
import Form from '../components/Form'
import {connect} from 'react-redux';
import {parking, unparking} from '../appState/actions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
var parked=[];
const slots = [
    {
        key: "1",
        slot: "B1"
    },
    {
        key: "2",
        slot: "B2"
    },
    {
        key: "3",
        slot: "B3"
    },
    {
        key: "4",
        slot: "B4"
    },
    {
        key: "5",
        slot: "B5"
    },
    {
        key: "6",
        slot: "B6"
    },
    {
        key: "7",
        slot: "B7"
    },
    {
        key: "8",
        slot: "B8"
    },
    {
        key: "9",
        slot: "B9"
    }
]
var slot= '';
class BikeSlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            change: false
        }
        this._openForm = this._openForm.bind(this);
        this._closeForm = this._closeForm.bind(this);
    }

    _openForm = () => {
        if(parked.indexOf(slot) == -1)
            this.setState({showForm: !this.state.showForm});
        else
        {
            var unParkVehicleNumber;
            this.props.parkList.find(a => a.includes(slot) ? unParkVehicleNumber = a : '');
            var x = unParkVehicleNumber.split("_");
            Alert.alert(
                'Unparking Alert',
                'Do you want to unpark "' + x[2] + '" ?',
                [
                  {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  { text: 'Yes', onPress: () => {this.props.unPark(slot);parked.filter(e => e != slot);console.log(parked);} }
                ],
                { cancelable: true }
              )
        }

    }

    componentDidMount() {
        console.log(this.props.parkList.length);
    }

    _closeForm = () => {
        this.setState({showForm: false});
    }

    render() {
        parked = [];
        slots.forEach(val => {if(this.props.parkList.length !=0 && this.props.parkList.find(a => a.includes(val.slot))){parked.push(val.slot)}});
        return(
            <View style={{flex: 1}} >
                <ParkOption />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                <FlatList
                    data = {slots}
                    numColumns={3}
                    key = {({item}) => item.key}
                    keyExtractor={({item, key}) => key}
                    renderItem = {({item}) => {
                        var index = parked.indexOf(item.slot);
                        return(
                            <TouchableOpacity disabled={this.state.showForm} style={{width: windowWidth * 0.2, height: windowWidth * 0.2 ,backgroundColor: index != -1 ? 'red' : 'lightgreen', margin: windowWidth * 0.05, justifyContent: 'center', alignItems: 'center'}} onPress={() => {slot = item.slot;this._openForm()}} >
                                <Text>{item.slot}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
                </View>
                {this.state.showForm && <Form _closeForm={this._closeForm} slot={slot} type="Bike" />}
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addParking: (vehicleNumber) => dispatch(parking(vehicleNumber)),
        unPark: (slot) => dispatch(unparking(slot))
    }
}

function mapStateToProps(state) {
    return {
        parkList: state.parking
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BikeSlot);