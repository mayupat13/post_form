import React, { Component, PureComponent } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  TouchableHighlight, 
  StatusBar, 
  Image,
  ScrollView,
  NetInfo,
  Alert,
  TouchableOpacity,
  PixelRatio,
  ToastAndroid,
  TouchableWithoutFeedback,
  Linking,
  FlatList,
  Dimensions,
  Share,
  Modal,
  BackAndroid,PermissionsAndroid,
  BackHandler,
  ActivityIndicator,
  ImageBackground,
  TextInput
   } from 'react-native';

var { height, width } = Dimensions.get('window');


export default class Payment extends Component {
    static navigationOptions = {
      headerShown: false
    };

  constructor(props) {
      super(props);
      this.state = {
        isLoading:true,
        url:'http://shopcon.in/t/login/',
        card_no:'',
        card_name:'',
        card_city:'',
        card_cvv:'',
        
      };
    }





Send_data(){
  const { navigate } = this.props.navigation;
  let card_no = this.state.card_no;
  let card_name = this.state.card_name;
  let card_city = this.state.card_city;
  let card_cvv = this.state.card_cvv;

  if (card_no == '' || card_name == '' || card_city == '' || card_cvv == '') {
    alert('please fill all the details')
  } else {
    const params = { card_no, card_name, card_city, card_cvv };
    navigate('Payment', params);
  }

  const params = { card_no, card_name, card_city, card_cvv };

}



render() {
    const { navigate } = this.props.navigation;

    return(
        <View style={styles.container} keyboardShouldPersistTaps="always">
          <View style={styles.logincontent}>
              <View style={{width:3*width/4}}>
                <Text style={{color:'#000',fontSize:25,fontWeight:'bold',marginBottom:30}}>Fill details to submit form</Text>
                <View style={{flexDirection:'row',backgroundColor:'#efefef',borderRadius:10, marginTop:10}}>
                  <TextInput
                    onChangeText={(text)=> this.setState({ card_name: text }) }
                    style={styles.input}
                    placeholder='Card Holder Name'
                    keyboardType="default"
                    underlineColorAndroid='#efefef'
                  />
                </View>
                <View style={{flexDirection:'row',backgroundColor:'#efefef',borderRadius:10, marginTop:10}}>
                  <TextInput
                    onChangeText={(text)=> this.setState({ card_no: text }) }
                    style={styles.input}
                    placeholder='Card Number'
                    keyboardType="phone-pad"
                    underlineColorAndroid='#efefef'
                    maxLength={16}
                  />
                </View>

                <View style={{flexDirection:'row',backgroundColor:'#efefef',borderRadius:10, marginTop:10}}>
                  <TextInput
                    onChangeText={(text)=> this.setState({ card_city: text }) }
                    style={styles.input}
                    placeholder='Card Holder City'
                    keyboardType="default"
                    underlineColorAndroid='#efefef'
                  />
                </View>

                <View style={{flexDirection:'row',backgroundColor:'#efefef',borderRadius:10, marginTop:10}}>
                  <TextInput
                    onChangeText={(text)=> this.setState({ card_cvv: text }) }
                    style={styles.input}
                    placeholder='CVV'
                    keyboardType="phone-pad"
                    underlineColorAndroid='#efefef'
                    maxLength={3}
                  />
                </View>
              
                  <TouchableHighlight onPress={() => this.Send_data()}  
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                      Submit
                    </Text>
                  </TouchableHighlight>
            </View>
          </View>
        </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  headercontainer:{
    flex:1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end', 
    },
    logincontent:{
      padding:30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center',
      width:width
    },
    button:{
      backgroundColor:'green',
      padding:10,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      marginTop:40
    },
    buttonText:{
      color:'white',
      fontSize:18,
    },
    input:{
      width:3*width/5,
      fontSize:18
    }
})

