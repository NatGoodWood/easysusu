import { View, Text,StyleSheet,Image,Button, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/AntDesign';


const Landing = ({navigation}) => {
  return (
    <SafeAreaView style ={{backgroundColor:'#fff', flex:1}}>
      <ScrollView>
      <View>
        <View style={styles.logo}>
          <Image source={require('../Esusu-App/images/EsusuLogo.png')} width='100' backgroundColor='rgb(15,36,62)'></Image>
        </View>
      <Text style={{fontSize:30, textAlign:'center', marginTop:140}}>Welcome to EasySusu</Text>
      <Text style={{fontSize:20, textAlign:'center', marginTop:30}}>Easy, Generious and Friendly way to raise funds to meet important financial goals</Text>

        <View style ={styles.bt}>
        <Button title='Get Started'color={'white'} onPress={()=>navigation.navigate('Registration')} />
        </View>

    
        <Text style={{fontSize:15, top:60, textAlign:'center'}}>Join Our growing Community of Savers and Borrowers</Text>
    

        <Text style={{fontSize:20, textAlign:'center', marginTop:140, right:65}}>Already a member?</Text> 
        <View style={styles.lg}>
        <Icon.Button
              name="login"
              backgroundColor='#76933C'
              onPress={() => navigation.navigate ('Login')}>
              Login
            </Icon.Button>
            
        </View>
          
    </View>

      </ScrollView>
       

    </SafeAreaView>
   
      
        


  )
}

const styles = StyleSheet.create({
    logo:{
        backgroundColor:'rgb(15,36,62)',
        marginTop:-5,
        height:60,
        
    },
    bt:{
        backgroundColor:'#76933C',
        top:50,
        borderRadius:5,
        height:50,
        justifyContent:'center',
      
    },
    lg:{
        width:100,
        left:200,
        bottom:30,
    },
});

export default Landing