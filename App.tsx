/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  AuthComponent  from './src/components/auth.component/auth.component';

import { RootState } from 'src/redux/rootReducer';
import { connect } from "react-redux";
import WeatherComponent from './src/components/weather.component/weather.component';
import ShowDataComponent from './src/components/auth.component/show-data.component';
import weatherComponent from 'src/components/weather.component/weather.component';

export interface AppProps {
  name: string
}
// class App extends Component<AppProps> {
//   // const usingHermes =
//   //   typeof HermesInternal === 'object' && HermesInternal !== null;
//     render() {
     
//       console.log('111111111',this.props.name);
      
//       return (
//         <>
//           <View style={{flex: 1, padding:10}}>
//             <View style={{flex: 1}}>
//               <AuthComponent />
//               {/* <Text>{this.props.name}</Text> */}
//             </View>
//             <View style={{flex: 1}} />
//             <View style={{flex: 1, backgroundColor: 'steelblue'}} />
//           </View>
//         </>
//       );
//     }
// };

const MainNavigator = createStackNavigator({
  Auth: {screen: AuthComponent},
  Congratulation: {screen: ShowDataComponent},
  Weather: {screen: WeatherComponent}
});

const App = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapStateToProps =(state: RootState)=> ({
  name: state.login.name
})
// export default App
export default connect(mapStateToProps)(App)


