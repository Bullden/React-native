import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {RootState} from 'src/redux/rootReducer';
import {connect} from 'react-redux';
import {RaisedTextButton} from 'react-native-material-buttons';
import {object, any} from 'prop-types';
import {doWeather} from '../../redux/weather/actions'
import { WeatherState } from 'src/redux/weather/types';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import AuthComponent from '../auth.component/auth.component';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import ShowDataComponent from '../auth.component/show-data.component';
import { createAppContainer, createNavigationContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { WeatherByDays } from './weather.byDays';
import { WeatherByHours } from './weather.byHours';
import { createStackNavigator } from 'react-navigation-stack';

interface ResponseApi {
    coord: object;
    weather: Array<any>;
    base: string;
    main: {
      temp: string,
      temp_max:string,
      temp_min:string
    };
    wind: object;
    rain: object;
    clouds: object;
    dt: number;
    sys: object;
    id: number;
    name: string;
    cod: number;
}
interface WeatherProps {
    doWeather: (data:WeatherState) => object
    apiWeather: ResponseApi
}
interface WeatherApiState {
    apiWeather: Object,
    index: any
    routes:any

}

// const TabNavigator = createMaterialBottomTabNavigator({
//   byDays:{
//     screen:WeatherByDays,
//     navigationOptions:{
//       tabBarLabel:'By day'
//     }
//   },
//   byHours:{
//     screen:WeatherByHours,
//     navigationOptions:{
//       tabBarLabel:'By hours'
//     }
//   },
// },
// {  
//   initialRouteName: "byDays",  
//   activeColor: '#f0edf6',  
//   inactiveColor: '#226557',  
//   barStyle: { backgroundColor: '#3BAD87' },  
// },  )
class WeatherComponent extends React.Component<WeatherProps, WeatherApiState> {
  static navigationOptions = {
    title: 'Weather',
    headerStyle: {
      backgroundColor: 'steelblue',
    },
    headerTintColor: '#fff',
  };
  constructor(props: any) {
    super(props);
    this.state = {
      index: 0,
      routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      ],
      apiWeather: {}
    };
  }
  

  
  



  componentDidMount() {   }
  render() {
    console.log(this.props.apiWeather);
    let api =  this.props.apiWeather
    // api.weather = []
    let weather = api.weather.find((x) =>{ return x.icon})
    
    console.log(weather.icon);
    const a = weather.icon
    
    let img = `http://openweathermap.org/img/w/${a}.png`
    
    
    return (
      <View >
        <View style ={{display:'flex',justifyContent:'center',alignItems:'center' ,backgroundColor: '#689AD3'}}>
          <Text style ={{color: 'white',fontSize:17,padding:20}}>{api.name}</Text>
        </View>
        <View style={{}}>
            <View style ={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',backgroundColor:'#274F7D',paddingLeft:10,paddingRight:10,paddingTop:10}}>
              <View style ={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Text style={{fontSize: 16, paddingBottom: 10,color:'white'}}>Now</Text>
                <Text style={{fontSize: 16, paddingBottom: 10,color:'white'}}>{api.main.temp}&deg;C</Text>
              </View>
              <View style ={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                <Text style={{fontSize: 16, paddingBottom: 10,color:'white'}}> Max</Text>
                <Text style={{fontSize: 16, paddingBottom: 10,color:'white'}}>{api.main.temp_max}&deg;C</Text>
              </View>
              <View style ={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                <Text style={{fontSize: 16, paddingBottom: 10,color:'white'}}> Min</Text>
                <Text style={{fontSize: 16, paddingBottom: 10,color:'white'}}>{api.main.temp_min}&deg;C</Text>
              </View>
              <View style ={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                <Text style={{fontSize: 16, paddingBottom: 10,color:'white'}}> Description</Text>
                <Text style={{fontSize: 16, paddingBottom: 10,color:'white'}}>{weather.description}</Text>
              </View>
              <View style ={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                <Text style={{fontSize: 16, paddingBottom: 10,color:'white'}}></Text>
                <Image style ={{width:50,height:50,marginTop: -10}}source={{uri:img}}></Image>
              </View>             
            </View>
        </View>
        <View>
          <View><Text>FOOTER</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

const mapStateToProps = (state: RootState) => ({
    apiWeather: state.weather.apiWeather
});

export default connect(mapStateToProps,{doWeather})(WeatherComponent);
