import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Alert, SafeAreaView, ScrollView,Text,View,Keyboard } from "react-native";
import Input from './components/Input';
import Button from './components/Button';
import Loader from './components/Loader';

const Login = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email:'',
    surname:'',
    firstname:'',
    password:'',
    repassword:'',
    phonenumber:'',
    gender:'',
  });
  const [errors, setErrors] = React.useState({});
  const [loading,setLoading] = React.useState(false);
  const validate =() => {
    Keyboard.dismiss();

    let valid= true;
    if(!inputs.email) {
      handleError("Please input email","email");
      valid = false;
    }
    if(!inputs.password){
      handleError("Please input a password","password");
    }
    if (valid) {
      login();
    }
  };
  
  const login = () =>{
    setLoading(true);
    setTimeout(async()=>{
      setLoading(false);
      let userData = await AsyncStorage.getItem("user")
      if(userData){
        userData = JSON.parse(userData);

        if(
          inputs.email==userData.email && 
          inputs.password==userData.password
          ) {
            AsyncStorage.setItem("user", JSON.stringify({...userData,loggedIn:true}),
            );
            navigation.navigate("Home")
          }else{
            Alert.alert("Error", "Invalid Details");
          }
      }else{
        Alert.alert("Error", "User does not exist");
      }
    },3000);
  };
  const handleOnChange = (text, input) => {
    setInputs (prevState => ({...prevState,[input]:text}));
  };

  const handleError = (errorMessage,input)=>{
    setErrors (prevState => ({...prevState,[input]:errorMessage}));
  }
  
  return (
    <SafeAreaView style ={{backgroundColor:'#fff', flex:1}} >
      <Loader visible={loading}/>
    <ScrollView contentContainerStyle ={{paddingTop:50,paddingHorizontal:20}}>
      <Text style={{color:'black', fontSize:35, fontWeight:'bold'}}>Login</Text>
      <Text style={{color:'grey', fontSize:18, marginVertical:10}}>Enter Your Details to Login</Text>
      <View style={{marginVertical:5}}></View>

      <Input 
      placeholder="Username/Email here" 
      label="Username/Email" 
      error={errors.email}
      onFocus={() =>{
        handleError(null, 'email');
      }}
      iconName="account-outline" 
      onChangeText = {(text)=>handleOnChange(text,"email")}
      />

      <Input 
      placeholder="Enter your password" 
      iconName="lock-outline" 
      label="Password" 
      error={errors.password}
      onFocus={() =>{
        handleError(null, 'password');
      }}
      password onChangeText = {(text)=>handleOnChange(text,"password")}
      />

  
            
      
      <Button title='Login' onPress={validate}/>
      <Text 
      onPress={()=> navigation.navigate('Registration')}
      style={{color:'grey',textAlign:'center',marginTop:5, fontSize:16}}> Dont Have an Account? Register</Text>
     
      <Text 
      onPress={()=> navigation.navigate('PassReset')}
      style={{color:'grey',textAlign:'center',marginTop:5, fontSize:16}}> Forgotten your Password?</Text>
     
    </ScrollView>
    </SafeAreaView>
  )
};


export default Login;