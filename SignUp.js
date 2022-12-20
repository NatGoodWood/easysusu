import { View, Text,TextInput,TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
          <Image source={require('../Esusu-App/images/EsusuLogo.png')} width='100' backgroundColor='rgb(15,36,62)'></Image>
        </View>
      <Text style={styles.header}>SignUp</Text>
      <TextInput style={styles.textinput} placeholder='Email'/>
      <TextInput style={styles.textinput} placeholder='Username'/>
      <TextInput style={styles.textinput} placeholder='Password' secureTextEntry={true}/>
      <TextInput style={styles.textinput} placeholder='Confirm Password' secureTextEntry={true}/>
      

      

      <TouchableOpacity style={styles.button}
      
      onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btntext}>Sign Up</Text>
      </TouchableOpacity>
    </View>

  )
}


const styles = StyleSheet.create({
  container:{
    alignSelf: 'stretch',
  },
  header:{
    fontSize:24,
    color:'#fff',
    backgroundColor:'#76933C',
    paddingBottom:3,
    marginTop:10,
    borderBottomWidth:1,
    justifyContent:'center',
    textAlign:'center'
  },
  logo:{
    backgroundColor:'rgb(15,36,62)',
    width:455,
    height:100,
    marginTop:60
  },
  textinput:{
    alignSelf:'stretch',
    height:40,
    marginBottom:3,
    color:'black',
    borderBottomColor:'black',
    borderBottomWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
  },
  button:{
    // alignSelf:'stretch',
    // alignItems:'center',
    // padding:20,
    // backgroundColor:'rgb(15,36,62)',
    // borderRadius:50,
    alignSelf:'stretch',
    alignItems:'center',
    width:100,
    height:40,
    left:130,
    justifyContent:'center',
    backgroundColor:'rgb(15,36,62)',
    borderRadius:50, 

  },
  forget:{
    alignSelf:'stretch',
    alignItems:'center',
    padding:20,
  },
  btntext:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,

  },
  forgettext:{
    color:'black',
    fontWeight:'bold',
    fontSize:20,

  }
})

export default SignUp