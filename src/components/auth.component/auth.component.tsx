import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  TextField,
  //   FilledTextField,
  //   OutlinedTextField,
} from 'react-native-material-textfield';
import {RaisedTextButton} from 'react-native-material-buttons';
import {View, PermissionsAndroid} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import RNSimData from 'react-native-sim-data';
//import { getManufacturer } from 'react-native-device-info';
import {RootState} from 'src/redux/rootReducer';
import {LoginRequest, LoginState} from 'src/redux/login/types';
import {doLogin} from '../../redux/login/actions';
export interface LoginProps {
  doLogin: (data: LoginRequest) => object;
  isLoggedIn: boolean;
  navigation: any;
}
class AuthComponent extends Component<LoginProps, any> {
  state: LoginState = {
    name: '',
    email: '',
    phone: '',
    isLoggedIn: false,

    // brand: '',
  };
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {
      backgroundColor: 'steelblue',
    },
    headerTintColor: '#fff',
  };
  _onPress = ({items}) => {
    console.log('SUBMIT:', items.name, items.email);
    const {doLogin} = this.props;
    doLogin({
      name: items.name,
      email: items.email,
      phone: this.state.phone,
      isLoggedIn: true,
    });
    const {navigate} = this.props.navigation;
    navigate('Show');
  };
  async requestPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can read the phone state');
      } else {
        console.log('permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  componentDidMount() {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
    ).then(status => {
      console.log('status1: ', status);
      console.log('getSimInfo1: ', RNSimData.getSimInfo());
      console.log('getPhoneNumberSync: ', DeviceInfo.getPhoneNumberSync());
    });
    let phone = DeviceInfo.getBrand();
    this.setState({phone});

    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    ).then(status => {
      console.log('status: ', status);
      console.log('phoneNumber1: ', RNSimData.getSimInfo().phoneNumber1);
      console.log('phoneNumber0: ', RNSimData.getSimInfo().phoneNumber0);
      console.log('getTelephoneNumber: ', RNSimData.getTelephoneNumber());
      console.log('getCountryCode: ', RNSimData.getCountryCode());
      console.log('getCarrierName: ', RNSimData.getCarrierName());

      console.log('getPhoneNumber: ', DeviceInfo.getPhoneNumber());
    });

    this.requestPermission();
  }
  render() {
    // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE).then((status) => {
    //   if (status === 'granted') {
    //     const data: { phoneNumber0: string, phoneNumber1: string } = RNSimData.getSimInfo();
    //     this.setState({
    //       phone: data.phoneNumber0 || data.phoneNumber1
    //     });
    //   }
    // });

    // const a = RNSimData.getSimInfo()
    // console.log('fdsdfsdf',a);

    // RNSimData.getSimInfo().deviceId0

    let {name, email} = this.state;
    let payload = {
      items: {
        name: this.state.name,
        email: this.state.email,
      },
    };

    return (
      <View style={{padding: 20}}>
        <TextField
          label="Name"
          value={name}
          onChangeText={name => this.setState({name})}
        />

        <TextField
          label="Email"
          value={email}
          onChangeText={email => this.setState({email})}
        />

        <TextField
          // label="Brand"
          placeholder={this.state.phone}
          disabled
        />
        <View style={{paddingTop: 30}}>
          <RaisedTextButton
            title="submit"
            onPress={this._onPress}
            payload={payload}
            color={'steelblue'}
            titleColor={'white'}
            style ={{width: 100}}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  // isLoggedIn: state.login.isLoggedIn
});

export default connect(
  mapStateToProps,
  {doLogin},
)(AuthComponent);
