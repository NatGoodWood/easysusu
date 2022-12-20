import { View, Image,StyleSheet} from 'react-native'
import React from 'react'
import  Icon from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context'

const Logo = ({navigation}) => {
  return (
    <>
    <SafeAreaView backgroundColor='white' height='100%' alignItems='center' >
    <Image source={require('../Esusu-App/images/EsusuLogo.png')} resizeMode='cover' top='40%'></Image>
    

    
        <View style={{width:130, height:100, left:10, top:300}} >
            {/* <Icon.Button
            name='play'
            onPress={() => navigation.navigate('Logo')}
            
            >Start Here </Icon.Button> */}
        </View>





    

    </SafeAreaView>
    
    
    
    
    </>
    

    
        
  )
}

const styles = StyleSheet.create({
   
    logo:{
      backgroundColor:'rgb(15,36,62)',
      top:200,
      width:400,
      alignItems:'center'
    },
    bg:{
        backgroundColor:'white',
        height:0,
        flex:1,
    }
    
    
});

export default Logo