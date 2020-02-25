import React, { Component, PureComponent } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar, 
  Image,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Linking,
  FlatList,
  Dimensions,
  ActivityIndicator,
  ImageBackground,
  TextInput,
  Keyboard
   } from 'react-native';

import Myicon from './Myicon.js'
var { height, width } = Dimensions.get('window');




class Each_book extends PureComponent {



  constructor(props) {
      super(props);
      this.state = {

      };

    }



  componentDidMount(){

  }






Openurl(url1,url2,url3,url4){

  if (url1 != undefined) {
    var bookurl = url1;
    if(bookurl.substr(bookurl.length - 3) == 'zip'){
      alert('No viewable version available')
      return;
    }
  }else if (url2 != undefined) {
    var bookurl = url2;
    if(bookurl.substr(bookurl.length - 3) == 'zip'){
      alert('No viewable version available')
      return;
    }
  }else if (url3 != undefined) {
    var bookurl = url3;
    if(bookurl.substr(bookurl.length - 3) == 'zip'){
      alert('No viewable version available')
      return;
    }
  }else if (url4 != undefined) {
    var bookurl = url4;
    if(bookurl.substr(bookurl.length - 3) == 'zip'){
      alert('No viewable version available')
      return;
    }
  }else{
     Alert.alert('Sorry','No viewable version available.');
  }
  
  Linking.canOpenURL(bookurl).then(supported => {
    if (supported) {
      Linking.openURL(bookurl);
    } else {
      console.log("Don't know how to open URI: " + bookurl);
    }
  });
};





  render() {
    return (
      <View> 
        <View style={{margin:5,marginBottom:40}}>  
          <TouchableWithoutFeedback onPress={() => this.Openurl(this.props.bookdata.formats["text/html; charset=utf-8"],this.props.bookdata.formats["text/plain"],this.props.bookdata.formats["text/plain; charset=utf-8"],this.props.bookdata.formats["text/html"])} >
            <View style={styles.content}>
              <View style={{borderRadius: 8,elevation:5,backgroundColor:'#fff',}}>
                {/*<Image style={styles.Book_card}
                  source={{uri: `https://www.gutenberg.org/cache/epub/${this.props.bookdata.id}/pg${this.props.bookdata.id}.cover.medium.jpg`}} />*/}
                {this.props.bookdata.formats["image/jpeg"] == null ?
                  <Image source={require('../img/no_book.png')}
                  style={{height:162,width: (width-30)/3,resizeMode:'contain'}}/>
                  :
                  <Image style={styles.Book_card}
                   source={{uri: this.props.bookdata.formats["image/jpeg"]}} />
                }
              </View>
              <View style={{marginTop:5}}>
                <Text style={{fontSize:12,fontFamily:'Montserrat-SemiBold'}} numberOfLines={2}>{this.props.bookdata.title}</Text>
                {this.props.bookdata.authors.length == 0 ? 
                  <Text style={{color:"#A0A0A0",fontSize:12,fontFamily:'Montserrat-Regular'}} numberOfLines={1}>No Book name</Text>
                  :
                  <Text style={{color:"#A0A0A0",fontSize:12,fontFamily:'Montserrat-Regular'}} numberOfLines={1}>{this.props.bookdata.authors[0].name}</Text>
                }
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      
    );
  }
}













export default class Home extends Component {


    static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
     return {
      // headerLeft: () => (
      //   <Myicon onPress={() => this.props.navigation.goBack()} style={{marginLeft:15,marginTop:20}} name="Back" color={'#5E56E7'} size={18} />
      // ),
      headerTitle:() =>(
          <View>
            <Text numberOfLines={1} style={{fontSize:24,color:'#5E56E7'}}>{params.topic}</Text>
          </View>
      ),
      headerTintColor:'#5E56E7'

    };
  };



  constructor(props) {
      super(props);
      this.state = {
        isLoading:true,
        isFocused:false
      };
    }



async componentDidMount() {

  // const token2 = await AsyncStorage.getItem(pastlogin);

  this.fetchdata();

}
  





async fetchdata() {

  
  const ctx = this
  const { navigate } = this.props.navigation;
  const { params } = this.props.navigation.state;

    fetch(`http://gutendex.com/books/?topic=${params.topic}`, { //http://gutendex.com/books/?topic=${params.topic} 
                method: "GET",
                headers: {
                  'Accept': 'application/json',
                  // 'Content-Type': 'application/json',
                },
              })

         .then(
          function(response) {
          console.log(response.headers.get('Content-Type'));
          console.log(response.headers.get('Date'));
          console.log(response.headers);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.type);
          console.log(response.url);

          if (response.status == 401 || response.status == 403) {
            Alert.alert('Login to verify your account');
            //navigate("Auth");
            return;
            }else if (response.status == 503) {
              ctx.Try_again('Sorry','Service temporarily unavailable, Try again later.');
            }else if (response.status == 500 || response.status == 404 || response.status == 405 || response.status == 406) {
              ctx.Try_again('Sorry','Something went wrong please try again.');
            }else if (response.status == 415) {
              ctx.Try_again('Sorry','Unsupported media format.');
            }else if (response.status == 429) {
              ctx.Try_again('Sorry','Too many request, Try after some time.');
            }else if (response.status == 502) {
              ctx.Try_again('Sorry','Service temporarily unavailable Please try later.');
            }
          else if (response.status == 200){

            response.json().then((responseData) => {
                if (!responseData){
                Alert.alert('Try Again','Something went wrong')
                ctx.componentDidMount();
              }else
              {
                console.log(responseData,'last_updated_data');


                ctx.setState({
                  isLoading:false,
                  all_book_size:responseData.results.length,
                  all_books:responseData.results,
                  nexturl:responseData.next,
                });


              }
            })
          }
        }
      ).catch(function(err) {
          console.log('Fetch Error', err);
      });
};









async _onEndReached(){
  console.log(this.state.nexturl)

  this.setState({
    isLoading1: true,
  });




if(this.state.nexturl != ''){
 
       return fetch(this.state.nexturl,
      {
         method: "GET",
                headers: {
                  'Accept': 'application/json',
                  // 'Content-Type': 'application/json',
                },
      })
      .then((response) => response.json())
      .then((responseData) => {
        if (!responseData){
        Alert.alert('Try Again','Something went wrong')
        this._onEndReached();
      }else
      {
        console.log(responseData,'in end');
        console.log(this.state.all_data,'in end');


        
          let allpros = this.state.all_books.concat(responseData.results);
          this.setState({
            all_book_size:allpros.length,
            isLoading1: false,
            nexturl: responseData.next, 
            all_books: allpros,
          });

      }
      }).catch((error) => {
         console.log(error);
       })
  }else{
    console.log("Books done");
  this.setState({
      isLoading1: false,
    });
  }
}






async Search_book(query) {

  const ctx = this

    const { navigate } = this.props.navigation;
    fetch(`http://gutendex.com/books/?search=${query}`, {
                method: "GET",
                headers: {
                  'Accept': 'application/json',
                  // 'Content-Type': 'application/json',
                },
              })

         .then(
          function(response) {

          if (response.status == 401 || response.status == 403) {
            Alert.alert('Login to verify your account');
            // navigate("Auth");
            return;
            }else if (response.status == 503) {
              ctx.Try_again('Sorry','Service temporarily unavailable, Try again later.');
            }else if (response.status == 500 || response.status == 404 || response.status == 405 || response.status == 406) {
              ctx.Try_again('Sorry','Something went wrong please try again.');
            }else if (response.status == 415) {
              ctx.Try_again('Sorry','Unsupported media format.');
            }else if (response.status == 429) {
              ctx.Try_again('Sorry','Too many request, Try after some time.');
            }else if (response.status == 502) {
              ctx.Try_again('Sorry','Service temporarily unavailable Please try later.');
            }
          else if (response.status == 200){

            response.json().then((responseData) => {
                if (!responseData){
                Alert.alert('Try Again','Something went wrong')
                ctx.componentDidMount();
              }else
              {

                console.log(responseData)
                ctx.setState({
                  //isLoading:false,
                  search_book_size:responseData.results.length,
                  search_books:responseData.results,
                  search_nexturl:responseData.next,
                });

              }
            })
          }
        }
      ).catch(function(err) {
          console.log('Fetch Error', err);
      });
};





async _onSearchEndReached(){
  console.log(this.state.search_nexturl)

  this.setState({
    isLoading1: true,
  });




if(this.state.search_nexturl != ''){
 
       return fetch(this.state.search_nexturl,
      {
         method: "GET",
                headers: {
                  'Accept': 'application/json',
                  // 'Content-Type': 'application/json',
                },
      })
      .then((response) => response.json())
      .then((responseData) => {
        if (!responseData){
        Alert.alert('Try Again','Something went wrong')
        this._onEndReached();
      }else
      {
        console.log(responseData,'in end');
        
          let search_allpros = this.state.search_books.concat(responseData.results);
          this.setState({
            search_book_size:search_allpros.length,
            nexturl: responseData.next, 
            search_books: search_allpros,
          });

      }
      }).catch((error) => {
         console.log(error);
       })
  }else{
    console.log("Books done");
  this.setState({
      isLoading1: false,
    });
  }
}



renderRowItem = (itemData) => {
  const { params } = this.props.navigation.state;
  return (
    <Each_book
      navigation = {this.props.navigation}

      bookdata={itemData.item}
      bookdata_length={this.state.all_book_size}
      // updateState={this.updateState.bind(this)}
     />
    )
  }


handleFocus = () => this.setState({isFocused: true})

handleBlur = () => {
  this.setState({isFocused: false})
  Keyboard.dismiss()
}

render() {
    const { navigate } = this.props.navigation;


    if (this.state.isLoading) {
      return (
       <View style={{flex:1,justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="green" />
        </View>
    );
}

    return(
      <View style={styles.container}>
            <StatusBar
              backgroundColor="#fff"
              barStyle="dark-content"
            />

            <View>
                <View>
                  {this.state.all_book_size  === 0 ?
                    <View>
                        <Text> no data {this.state.all_book_size}</Text> 
                    </View>
                      :
                    <View>
                      <View style={[styles.searchSection, {
                               borderColor: this.state.isFocused
                                   ? '#5E56E7'
                                   : '#F0F0F6',
                               borderWidth: 1,
                           }]}>
                        <Myicon style={{marginTop:20}} name="Search" color={'#A0A0A0'} size={18} />
                        <TextInput
                          onFocus={this.handleFocus}
                          onBlur={this.handleBlur}
                          onChangeText={text => this.Search_book(text)}
                          //value={value}
                          style={styles.searchbox}
                          placeholder="Search by Author Name"
                        />
                      {this.state.isFocused ?
                        <Myicon style={{marginTop:20}} onPress={this.handleBlur} name="Cancel" color={'#A0A0A0'} size={16} />
                        : null
                      }
                      </View>
                      <View style={{backgroundColor:'#F8F7FF'}}>
                        {this.state.isFocused ?
                          <FlatList
                            horizontal={false}
                            numColumns={3}
                            data={this.state.search_books}
                            onEndReached={this._onSearchEndReached.bind(this)}
                            keyExtractor={(item, index) => index.toString() + item.title + item.id}
                            renderItem={this.renderRowItem}
                            onEndReachedThreshold={0.5}
                          />
                          :
                          <FlatList
                            horizontal={false}
                            numColumns={3}
                            data={this.state.all_books}
                            onEndReached={this._onEndReached.bind(this)}
                            keyExtractor={(item, index) => index.toString() + item.title + item.id}
                            renderItem={this.renderRowItem}
                            onEndReachedThreshold={0.5}
                          />
                        }
                      </View>
                    </View>
                  }
                </View>
            </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    width: (width-30)/3,
  },
  Book_card:{
    height: 162,
    borderRadius: 8,
    borderColor:'#ccc',
    borderWidth:1,
  },
  searchbox:{
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
    fontFamily:'Montserrat-SemiBold',
    fontSize:16,
    backgroundColor: '#F0F0F6',
  },
  searchSection: {
    paddingLeft:10,
    paddingRight:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F6',
    margin:10,
    borderRadius:4, 
    height: 50,
},
})

