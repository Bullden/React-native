import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {RootState} from 'src/redux/rootReducer';
import {connect} from 'react-redux';

interface ShowDataProps {
  name: string;
  email: string;
  phone: string;
}

class ShowDataComponent extends Component<ShowDataProps> {
  static navigationOptions = {
    title: 'Congratulation',
    headerStyle: {
      backgroundColor: 'steelblue',
    },
    headerTintColor: '#fff',
  };
  render() {
    return (
      <View style ={{margin:20}}>
        <Text style={{fontSize:17,paddingBottom:10}}>Your name:{this.props.name}</Text>
        <Text style={{fontSize:17,paddingBottom:10}}>Your email:{this.props.email}</Text>
        <Text style={{fontSize:17,paddingBottom:10}}>Your phone:{this.props.phone}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  name: state.login.name,
  email: state.login.email,
  phone: state.login.phone,
});

export default connect(mapStateToProps)(ShowDataComponent);
