import { View, Text, SafeAreaView,Image, ScrollView,StyleSheet } from 'react-native'
import React from 'react';
import Input from './components/Input';
import Button from './components/Button';

const PasswordReset = () => {
  return (
  <SafeAreaView>
    <ScrollView>
        <View style={{flex: 1, padding: 0}}>
            <View style={styles.logo}>
                <Image source={require('../Esusu-App/images/EsusuLogo.png')} width='100' backgroundColor='rgb(15,36,62)'></Image>
            </View>
        </View>
        <View style={{marginVertical:50}}>
            <Text style={{fontSize:18}}> Please enter the email address you used, when you registered with EasySusu and we will send you a link to reset your password </Text>
        </View>

        <Input 
          placeholder="eg. someone@gmail.com" 
          label="Enter Your Email Address"
        />

        <Button title='Send'/>

    </ScrollView>
        

  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    logo: {
        backgroundColor:'rgb(15,36,62)',
        width:375,
    },
    
    
  });
export default PasswordReset;