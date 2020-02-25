




import React, { Component } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  StatusBar, 
  Image,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Dimensions,
  ImageBackground
   } from 'react-native';

import { StackNavigator } from "react-navigation";
import Myicon from './Myicon.js'

import Fiction from "../allsvg/Fiction.js"
import Drama from "../allsvg/Drama.js"
import Humor from "../allsvg/Humor.js"
import Politics from "../allsvg/Politics.js"
import Philosophy from "../allsvg/Philosophy.js"
import History from "../allsvg/History.js"
import Adventure from "../allsvg/Adventure.js"

var { height, width } = Dimensions.get('window');

export default class Choose_topics extends Component {


  static navigationOptions = {
     headerShown: false
  };


  constructor(props) {
      super(props);
      this.state = {
      };
    }




Single_genre(topic){
  const { navigate } = this.props.navigation;

  const params = { topic };

  navigate('Home', params);
}







render() {
    const { navigate } = this.props.navigation;

    return(
      <ScrollView style={styles.container}>
            <StatusBar
              backgroundColor="#fff"
              barStyle="dark-content"
            />

          <ImageBackground source={require('../img/bk_title.png')} style={styles.headercontainer}>
            <View style={{width: "100%",padding:15}}>
              <View style={[{marginBottom: 20,marginTop:40}]}>
                <Text style={{color:'#5E56E7',fontSize:48,fontFamily:'Montserrat-SemiBold'}}>Gutenberg Project</Text>
                <Text style={{color:'#333333',fontSize:16,fontFamily:'Montserrat-Regular'}}>A social cataloging application that allows you to
                  freely search its database of books,
                  annotations, and reviews.</Text>
              </View>
            </View>
          </ImageBackground>



          <View style={styles.content_box}>
              <TouchableWithoutFeedback onPress={() => this.Single_genre('Fiction')} >
                <View style={styles.genre}>
                  <View style={{flexGrow: 1,flexDirection:'row'}}>
                      <Adventure />
                    <Text style={{marginLeft:5,fontSize:20,fontFamily:'Montserrat-SemiBold'}}>FICTION</Text>
                  </View>
                  <View>
                    <Myicon name="Next" color={'#5E56E7'} size={22}/>
                  </View>
                </View>
              </TouchableWithoutFeedback>


              <TouchableWithoutFeedback onPress={() => this.Single_genre('Drama')} >
                <View style={styles.genre}>
                  <View style={{flexDirection:'row'}}>
                    <Fiction />
                    <Text style={{marginLeft:5,fontSize:20,fontFamily:'Montserrat-SemiBold'}}>DRAMA</Text>
                  </View>
                  <View>
                    <Myicon name="Next" color={'#5E56E7'} size={22}/>
                  </View>
                </View>
              </TouchableWithoutFeedback>


              <TouchableWithoutFeedback onPress={() => this.Single_genre('Humor')} >
                <View style={styles.genre}>
                  <View style={{flexDirection:'row'}}>
                    <Humor />
                    <Text style={{marginLeft:5,fontSize:20,fontFamily:'Montserrat-SemiBold'}}>HUMOR</Text>
                  </View>
                  <View>
                    <Myicon name="Next" color={'#5E56E7'} size={22}/>
                  </View>
                </View>
              </TouchableWithoutFeedback>


              <TouchableWithoutFeedback onPress={() => this.Single_genre('Politics')} >
                <View style={styles.genre}>
                  <View style={{flexDirection:'row'}}>
                    <Politics />
                    <Text style={{marginLeft:5,fontSize:20,fontFamily:'Montserrat-SemiBold'}}>POLITICS</Text>
                  </View>
                  <View>
                    <Myicon name="Next" color={'#5E56E7'} size={22}/>
                  </View>
                </View>
              </TouchableWithoutFeedback>


              <TouchableWithoutFeedback onPress={() => this.Single_genre('Philosophy')} >
                <View style={styles.genre}>
                  <View style={{flexDirection:'row'}}>
                    <Philosophy />
                    <Text style={{marginLeft:5,fontSize:20,fontFamily:'Montserrat-SemiBold'}}>PHILOSOPHY</Text>
                  </View>
                  <View>
                    <Myicon name="Next" color={'#5E56E7'} size={22}/>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.Single_genre('History')} >
                <View style={styles.genre}>
                  <View style={{flexDirection:'row'}}>
                    <History />
                    <Text style={{marginLeft:5,fontSize:20,fontFamily:'Montserrat-SemiBold'}}>HISTORY</Text>
                  </View>
                  <View>
                    <Myicon name="Next" color={'#5E56E7'} size={22}/>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.Single_genre('Adventure')} >
                <View style={styles.genre}>
                  <View style={{flexDirection:'row'}}>
                    <Adventure />
                    <Text style={{marginLeft:5,fontSize:20,fontFamily:'Montserrat-SemiBold'}}>ADVENTURE</Text>
                  </View>
                  <View>
                    <Myicon name="Next" color={'#5E56E7'} size={22}/>
                  </View>
                </View>
              </TouchableWithoutFeedback>
          </View>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content_box: {
    padding:10,
    backgroundColor: '#F8F7FF',
  },
  headercontainer:{
    justifyContent: 'center',
    alignItems: 'center',    
  },
  genre:{
    margin:10,
    padding:10,
    height:50,
    paddingLeft:10,
    paddingRight:10,
    justifyContent:'space-between',
    flexDirection:'row',
    elevation:4,
    borderRadius:4,
    backgroundColor:'#fff',
  },
    logo: {
    marginTop: 20,
    marginBottom: 20,
  },
})

