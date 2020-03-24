import React, { Component } from 'react'
import { 
  StatusBar,
  Image,
  Dimensions,
  SafeAreaView,
  Text
} 
from 'react-native'

const {width,height} = Dimensions.get('window');
import NetInfo from "@react-native-community/netinfo";




class Splashscreen extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  
componentDidMount() {
  this.fetchdata();
} 


  fetchdata() {
    const { navigate } = this.props.navigation
    NetInfo.fetch().then(state => {

      if (state.isConnected == !true) {
        this.fetchdata()
      }else{
        this.timeoutHandle = setTimeout(()=>{
          navigate('MainApp');
        }, 2000);
      }
    });
  };


render() {
  
    return(
      
      <SafeAreaView style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
        <StatusBar backgroundColor='#fff' barStyle="dark-content" />
        <Text style={{color:'#5E56E7',fontSize:48,fontWeight:'bold'}}>Post Form</Text>
        <Text style={{color:'#5E56E7',fontSize:48,fontWeight:'bold'}}>Project</Text>
      </SafeAreaView>
    );
  }
}



export default Splashscreen;