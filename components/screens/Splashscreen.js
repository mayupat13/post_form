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
          navigate('Choose_topics');
        }, 2000);
      }
    });
};


render() {
  
    return(
      
      <SafeAreaView style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
        <StatusBar backgroundColor='#fff' barStyle="dark-content" />
        <Image
          style={{width:150,height:150,resizeMode:"cover"}}
          source={require('../img/brand_logo.png')}
        /> 
        <Text style={{color:'#5E56E7',fontSize:48,fontFamily:'Montserrat-Bold'}}>Gutenberg</Text>
        <Text style={{color:'#5E56E7',fontSize:48,fontFamily:'Montserrat-Bold'}}>Project</Text>
      </SafeAreaView>
    );
  }
}



export default Splashscreen;