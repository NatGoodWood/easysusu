import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
 
// Import required component
import {Button, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
 
// Import vector icons
import Icon from 'react-native-vector-icons/AntDesign';
 
const Home= ({navigation}) => {
  const [userDetails,setUserDetails] = React.useState();
  React.useEffect(()=> { 
    getUserDetails()
   },[]);
  const getUserDetails = async () =>{
    const userData = await AsyncStorage.getItem('user');
  if(userData){
    setUserDetails(JSON.parse(userData));

  }
};

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 0}}>
        <View style={styles.logo}>
          <Image source={require('../Esusu-App/images/EsusuLogo.png')} width='100' backgroundColor='rgb(15,36,62)'></Image>
        </View>


        <View style={{marginTop: 0, marginBottom: 0, left:265, width:100, bottom:45,borderWidth:1,borderRadius:10, borderColor:'#76933C'}}>
            {/* Icon.Button Component */}
            <Icon.Button
              name="logout"
              color={'#76933C'}
              backgroundColor='#fff'
              onPress={() => alert('You Are Logged Out')}>
              Log Out
            </Icon.Button>
        </View>
        
        

        <View style={styles.container}>
          <Text style={styles.heading}>
            Welcome,
          </Text>

          <Text style={styles.p}>
            What Would You Like to Do Today?
          </Text>
        <View/>

        
        <Text style={styles.n}>
          {userDetails?.fullname}
        </Text>
        <View style={styles.bell}>
          <Icon.Button name='bells'
          backgroundColor={'transparent'}
          color={'#76933C'}
          size={30}
          fontWeight={'bold'}/>

        </View>

        <View style={styles.iconContainer}>

            <View style={styles.info}>
              <Icon.Button
              name="infocirlce"
              backgroundColor='#fff'
              width= '100%'
              height='100%'
              borderWidth='1'
              borderColor='#76933C'
              borderRadius={10}
              paddingLeft={10}
              paddingTop={20}
              flexDirection={'column'}
              size={30}
              color={'#76933C'}
              onPress={() => navigation.navigate('How It Works')}>
              <Text style={{fontSize:15,fontWeight:'',color:'black', justifyContent:'center', top:5}}>Know How It Works</Text>
              </Icon.Button>
            </View>


            <View style={styles.calculator}>
              <Icon.Button
              name="calculator"
              backgroundColor='#fff'
              width= '100%'
              height='100%'
              borderWidth='1'
              borderColor='#76933C'
              color={'#76933C'}
              borderRadius={10}
              paddingLeft={10}
              flexDirection={'column'}
              paddingTop={20}
              size={30}
              onPress={() => navigation.navigate('SusuCal')}>
              <Text style={{fontSize:15,fontWeight:'',color:'black', top:5}}> Susu Calculator </Text>
              </Icon.Button>
            </View>
            
            <View style={styles.join}>
              <Icon.Button
              name="addusergroup"
              backgroundColor='#fff'
              color={'#76933C'}
              width= '100%'
              height='100%'
              borderWidth='1'
              borderColor='#76933C'
              flexDirection={'column'}
              paddingLeft={10}
              paddingTop={20}
              borderRadius={10}
              size={30}
              onPress={() => navigation.navigate('SusuCal')}>
                <Text style={{fontSize:15,fontWeight:'',color:'black', textAlign:'left'}} >Join A Group</Text>
              </Icon.Button>
            </View>
            
          
          <View style={styles.group}>
            <Icon.Button
              name="contacts"
              backgroundColor='#fff'
              color={'#76933C'}
              width= '100%'
              height='100%'
              borderWidth='1'
              borderColor='#76933C'
              borderRadius={10}
              flexDirection={'column'}
              paddingLeft={10}
              paddingTop={20}
              size={30}
              onPress={() => navigation.navigate('Settings')}>
              <Text style={{fontSize:15,fontWeight:'',color:'black', top:5}} >My Groups</Text>
            </Icon.Button>
          </View>
            
          <View style={styles.contact}> 
            <Icon.Button
              name="customerservice"
              backgroundColor='#fff'
              color='#76933C'
              width= '100%'
              height='100%'
              borderWidth='1'
              borderColor='#76933C'
              borderRadius={10}
              paddingLeft={10}
              paddingTop={20}
              flexDirection='column'
              size={30}
              onPress={() => navigation.navigate('Contact')}>
              <Text style={{fontSize:15,fontWeight:'',color:'black', top:5}}>Contact Us</Text>
            </Icon.Button> 
          </View>
          <View style={styles.share}> 
            <Icon.Button
              name="sharealt"
              backgroundColor='#fff'
              color='#76933C'
              width= '100%'
              height='100%'
              borderWidth='1'
              borderColor='#76933C'
              borderRadius={10}
              paddingLeft={10}
              paddingTop={20}
              flexDirection='column'
              size={30}
              onPress={() => navigation.navigate('Social')}>
              <Text style={{fontSize:15,fontWeight:'',color:'black', top:5}}>Share On Social Media</Text>
            </Icon.Button> 
          </View>
        </View>


        <View style={{backgroundColor:'#76933C', top:-8, width:340, height:100, justifyContent:'center', borderRadius:20,borderWidth:2, fontWeight:'bold'}}>
          <Button title='Invite Friends & Family'
          color={'white'}
          fontWeight={'bold'}
          />
        </View>

        <View>

      <View style={styles.bottomicons}>
            <View style={styles.home}>
              <Icon.Button
              name="home"
              backgroundColor='#fff'
              color={'#76933C'}
              width= '100%'
              height='100%'
              size={30}
              paddingLeft={10}
              paddingTop={20}
              borderColor='#76933C'
              borderRadius={10}
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              onPress={() => navigation.navigate('Home')}>
              <Text style={{fontSize:15,fontWeight:'',color:'#76933C'}}>Home </Text>
              </Icon.Button>
            </View>

            <View style={styles.joing}>
              <Icon.Button
              name="addusergroup"
              backgroundColor='#fff'
              color={'grey'}
              width= '100%'
              height='100%'
              paddingLeft={10}
              paddingTop={20}
              borderRadius={10}
              size={30}
              borderColor='rgb(15,36,62)'
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              onPress={() => navigation.navigate('Join')}>
              <Text style={{fontSize:15,fontWeight:'',color:'grey'}}> Join A Group </Text>
              </Icon.Button>
            </View>

            <View style={styles.profile}>
              <Icon.Button
              name="user"
              backgroundColor='#fff'
              color={'grey'}
              width= '100%'
              height='100%'
              paddingLeft={10}
              borderRadius={10}
              paddingTop={20}
              size={30}
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              onPress={() => navigation.navigate('Profile')}>
              <Text style={{fontSize:15,fontWeight:'',color:'grey'}}> My Profile </Text>
              </Icon.Button>
            </View>

            <View style={styles.setting}>
              <Icon.Button
              name="setting"
              backgroundColor='#fff'
              color={'grey'}
              width= '80%'
              height='100%'
              paddingLeft={10}
              paddingTop={20}
              borderRadius={10}
              size={30}
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              onPress={() => navigation.navigate('Settings')}>
              <Text style={{fontSize:15,fontWeight:'Z',color:'grey'}}> Settings </Text>
              </Icon.Button>
            </View>
      </View>
        
        
      </View>

        
      </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    justifyContent:'center',
    top:25,
  },
  logo:{
    backgroundColor:'rgb(15,36,62)',
    width:375,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    bottom:60,
    right:105,
    fontWeight:'bold'
  },
  t:{
    fontWeight:'bold',
    bottom:50,
    left:10,
    fontSize:20,
  },
  n:{
    bottom:75,
    fontSize:18,
    left:40,
  },
  bell:{
    bottom:120,
    left:155,
    

  },
  p:{
    bottom:1,
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold'
  },
  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:'center',
    flex:1,
    bottom:50,
  },
  calculator:{
    justifyContent:"center",
    alignItems:"center",
    height:100,
    width:100,
    left:2,
    flexDirection:'column',
    paddingTop:10
  },
  info:{ 
    justifyContent:"center",
    alignItems:"center",
    height:100,
    width:90,
    right:10,
    flexDirection:'column',
    paddingTop:10
  },
  join:{
    // maxWidth:110,
    // minWidth:110,
    justifyContent:"center",
    alignItems:"center",
    height:100, 
    width:100,
    left:13,
    flexDirection:'column',
    paddingTop:10
  },
  group:{ 
    // justifyContent:"center",
    // alignItems:"center",
    // height:100, 
    // width:115,
    // paddingTop:10,
    // right:70,
    // top:90,
    // margin:10,
    justifyContent:"center",
    alignItems:"center",
    height:100,
    width:100,
    right:10,
    flexDirection:'column',
    paddingTop:10
  },
  contact:{
    // maxWidth:110,
    // minWidth:100,
    // justifyContent:"center",
    // alignItems:"center",
    // height:100,
    // width:100, 
    // margin:10,
    // paddingTop:10,
    // right:65,
    // bottom:10,
    justifyContent:"center",
    alignItems:"center",
    height:100,
    width:100,
    flexDirection:'column',
    right:1,
    paddingTop:10
  },
  share:{
    justifyContent:"center",
    alignItems:"center",
    height:100,
    width:100,
    left:10,
    flexDirection:'column',
    paddingTop:10

  },
  bottomicons:{
    justifyContent:'center',
    flexDirection: "row", 
    flexWrap: "wrap", 
    backgroundColor:'transparent',
    width:400,
    bottom:8
  },
  home:{
    maxWidth:100,
    minWidth:100,
    justifyContent:"flex-end",
    alignItems:"center",
    height:100, 
    right:-1,
  },
  joing:{
    maxWidth:100,
    minWidth:100,
    justifyContent:"flex-end",
    alignItems:"center",
    height:100, 
    left:-6
  },
  profile:{
    maxWidth:100,
    minWidth:100,
    justifyContent:"flex-end",
    alignItems:"center",
    height:100, 
    left:-6
  },
  setting:{
    maxWidth:100,
    minWidth:100,
    justifyContent:"flex-end",
    alignItems:"center",
    height:100, 
    right:8,
    
  }
  
});
export default Home;