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


export default class Thanks extends Component {
    static navigationOptions = {
      headerShown: false
    };

  constructor(props) {
      super(props);
      this.state = {
        
      };
    }






render() {
    const { navigate } = this.props.navigation;

    return(
        <View style={styles.container} keyboardShouldPersistTaps="always">
          <View style={styles.headercontainer}>
              <Text style={{fontSize:20,alignSelf:'center'}}>Thanks!!</Text>
              <Text >Your Form submitted sucessfully through website link in React Native</Text>

              <Text>click the link below to see your data</Text>
              <Text style={{textAlign:'center',color:'blue'}} onPress={() => Linking.openURL('http://shopcon.in/t/all-credit-card/')}>click here</Text>
          </View>
        </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
  headercontainer:{
    padding:10,
    borderRadius:10,
    elevation:1,
    backgroundColor:'#fff'
       
    },
})

