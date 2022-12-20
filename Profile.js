import { View, Text, SafeAreaView,StyleSheet,Image, Button, ScrollView} from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/AntDesign';





const Profile = ({navigation}) => {
 
  return (
    <SafeAreaView style={{flex:1}}>
       <ScrollView>
         
        
         

          
          <Text style={styles.header}>
            My Profile
          </Text>
          <Image source={require('../Esusu-App/images/pass.jpg')} style={styles.pass} ></Image>
          <Text style={styles.head}>
          EasySusu ID: CNW100003
          </Text>
          <View style={styles.profile}>
              <Icon.Button
              name="user"
              backgroundColor='#fff'
              color={'#76933C'}
              width= '100%'
              height='100%'
              paddingLeft={10}
              borderRadius={10}
              paddingTop={20}
              borderWidth={2}
              borderColor={'#76933C'}
              size={30}
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              onPress={() => navigation.navigate('Account')}>
              <Text style={{fontSize:16,fontWeight:'',color:'black'}}> My Account </Text>
              </Icon.Button>
            </View>

          <Text style={styles.p}>
            PERSONAL INFORMATION
          </Text>

          <View style={styles.b}>
          <Button title='Edit Information' color={'white'} fontSize={10} onPress={() => alert('Edit Personal Info')}/>
          </View>

          <View style={styles.info}>
            <Text>Full Name: Wood Caleb Nathaniel</Text>
            <Text>Country of Birth: Ghana</Text>
            <Text>Country  of Residence: Ghana</Text>
            <Text>Email Address: calebnatwood@gmail.com</Text>
            <Text>Gender: Male</Text>
            <Text>Date of Birth:14 Jun 90</Text>
            <Text>Phone Number: +233 559640133</Text>
          </View>

          <Text style={styles.a}>
            ADDRESS
          </Text>
      
          <View style={styles.e}>
            <Button title='Edit Address' color={'white'} fontSize={10} onPress={() => alert('Edit Address Info')}/>
          </View>

          <Text style={styles.ai}>Address: 
          Ex4 GNPC ESTATE COMMUNITY THREE TEMA
          </Text>
          

        


       </ScrollView>
  </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
    header:{
        fontSize:30,
        backgroundColor:'rgb(15,36,62)',
        color:'#fff',
        

    },

    head:{
        margin:20,
        left:-10,

    },
    logo:{
      backgroundColor:'rgb(15,36,62)',
      width:375,
    },
    p:{
      backgroundColor:'#76933C',
      width:375,
      color:'white',
      justifyContent:'end',
      bottom:100,
    },
    b:{
      bottom:125,
      left:120,
    },
    a:{
      backgroundColor:'#76933C',
      width:375,
      color:'white',
      justifyContent:'end',
      bottom:90,
    },
    ai:{
      // textAlign:'center'
      margin:10,

    },
    e:{
      bottom:115,
      left:130,
    },
    info:{
      marginHorizontal:10,
      marginVertical:5,
      bottom:120,
    },
    pass:{
      width:80,
      height:100,
      alignItems:'center',
      left:10,
      top:10,
    },
    profile:{
      maxWidth:100,
      minWidth:100,
      justifyContent:"flex-end",
      alignItems:"center",
      height:100,
      left:260,
      bottom:140,
    },
    
});
export default Profile;