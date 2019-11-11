import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {RootState} from 'src/redux/rootReducer';
import {connect} from 'react-redux';
import {RaisedTextButton} from 'react-native-material-buttons';
import { WeatherState } from 'src/redux/weather/types';
import {doWeather} from '../../redux/weather/actions'

interface ShowDataProps {
  doWeather: (data:WeatherState) => object
  name: string;
  email: string;
  phone: string;
  navigation: any;
}

class ShowDataComponent extends Component<ShowDataProps,any> {
  static navigationOptions = {
    title: 'Congratulation',
    headerStyle: {
      backgroundColor: 'steelblue',
    },
    headerTintColor: '#fff',
  };
  constructor(props: any) {
    super(props);
    this.state = {
      apiWeather: {}
    };
  }


  _onPress = () => {

    const {navigate} = this.props.navigation;
    navigate('Weather');
  }
  componentDidMount () {   
      const {doWeather} = this.props;   
        doWeather ({
          apiWeather: this.state.apiWeather
      }) 
  
  }
  render() {

    return (
      <View style ={{margin:20}}>
        <Text style={{fontSize:17,paddingBottom:10}}>Your name:{this.props.name}</Text>
        <Text style={{fontSize:17,paddingBottom:10}}>Your email:{this.props.email}</Text>
        <Text style={{fontSize:17,paddingBottom:10}}>Your phone:{this.props.phone}</Text>
        <RaisedTextButton
            title="Ok, It's me!"
            onPress={this._onPress}
            color={'steelblue'}
            titleColor={'white'}
            style ={{width: 100}}
          />
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  name: state.login.name,
  email: state.login.email,
  phone: state.login.phone,
});

export default connect(mapStateToProps,{doWeather})(ShowDataComponent);
