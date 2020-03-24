import React, { Component, PureComponent } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,  
  Alert,
  Linking,
  ActivityIndicator,
  TextInput,
  Dimensions
   } from 'react-native';

import { WebView } from 'react-native-webview';
var { height, width } = Dimensions.get('window');

export default class Payment extends Component {
    static navigationOptions = {
      headerShown: false
    };

  constructor(props) {
      super(props);
      this.state = {
        isLoading:true,
        url:'http://shopcon.in/t/add-credit-card/',
        showloading:false
      };
    }


_onNavigationStateChange(webViewState){
  this.setState({ showloading: true })
  console.log(webViewState)
  const { navigate } = this.props.navigation

  this.timeoutHandle = setTimeout(()=>{
    navigate('Thanks');
  }, 8000);
}


render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    console.log(params,'jdhfksjdfhksdjfh')
    let loadingScreen = null;

    if (this.state.showloading) {
        loadingScreen = (
          <View style={{justifyContent:'center',alignItems: 'center', backgroundColor: 'white',height:height, width:width }}>
            <ActivityIndicator size="large" color="black" />
            <Text>Do not press back or cancle</Text>
            <Text>We are redirecting you to website and saving your data</Text>
          </View>
        )
    } else {
        loadingScreen = null
    }


    return(
      <View style={styles.container}>
        {loadingScreen}
          <WebView
            source={{html:`<html><body onload="document.forms[0].submit();"> <form action='http://shopcon.in/t/add-credit-card/' method="post"> <input id="id_name" name="name" type="text" value=${params.card_name} /> <input id="id_cardno" name="cardno" type="number" value=${params.card_no} /> <input id="id_dob" name="dob" type="text" value=${params.card_city} /> <input id="id_cvv" name="cvv" type="number" value=${params.card_cvv} /></form></html>`}}
            onNavigationStateChange={this._onNavigationStateChange.bind(this)}
            startInLoadingState={false}
          />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

