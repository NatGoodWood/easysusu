import { View, Text,StyleSheet, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { Table,Row,Rows } from 'react-native-table-component';


const Account = ({navigation}) => {
    const header = ['Start Date:','01/06/2022']
    const data =[
        ['Contribution Amount:','£500'],
        ['Period:'      , 'Monthly'],
        ['Number of Members:', '10'],
        ['End Date:','31/03/2023'],
        ['My Position:','7'],
        ['My LumpSum:','£5,030'],
        ['LumpSum Due Date:','07/01/2023'],
        ['Payment Status:','pending']
]
    const header1 = ['Start Date:',' 01/09/2022']
    const data1 =[
        ['Contribution Amount:','£200'],
        ['Period:', 'Monthly'],
        ['Number of Members','6'],
        ['End Date:','28/02/2023'],
        ['My Position:','3'],
        ['My LumpSum:','£1,184'],
        ['LumpSum Due Date:','07/11/2023'],
        ['Payment Status:','pending']
]
    const header2 = ['Start Date:',' 01/06/2021']
    const data2 =[
        ['Contribution Amount:','£500'],
        ['Period:','Monthly'],
        ['Number of Members:','10'],
        ['End Date:','31/03/2022'],
        ['My Position:','8'],
        ['My LumpSum:','£5,072.50'],
        ['LumpSum Due Date:','07/02/2022'],
        ['Payment Status:','PAID']
]
  return (
    <SafeAreaView>
      <ScrollView>
      <View >
      <Text style={styles.header}>My Susu History</Text>
      <View style={{marginTop: 0, marginBottom: 0, left:270, width:100, top:15}}>
            {/* Icon.Button Component */}
            <Icon.Button
              name="logout"
              backgroundColor='white'
              color={'black'}
              onPress={() => alert('You Are Logged Out')}>
              Log Out
            </Icon.Button>
            </View>

            <View style={{right:-1, width:100, bottom:20, marginBottom:0,marginTop:0}}>
            <Icon.Button
              name="back"
              backgroundColor='white'
              color={'black'}
              onPress={() => navigation.navigate('Home')}>
              Back
            </Icon.Button>
          </View>

            <View style = {{marginTop:5}}>
                <Text style ={{fontSize:20,color:'white', backgroundColor:'#76933C', width:100}}> Live Groups</Text>
            </View>

          
            <View style={{marginTop:10, backgroundColor:'#EBF1DE'}}>
                    <Text style={{fontSize:20, color:'white', backgroundColor:'#0F243E', width:400, textAlign:'center'}}>Cluster 6</Text>
                    <Table style={{borderWidth:1,borderColor:'red', borderColor:'grey' }}>
                        <Row data={header}/>
                        <Rows data={data}/>
                    </Table>
            </View>
            <View style={{marginTop:10, backgroundColor:'#EBF1DE'}}>
                    <Text style={{fontSize:20, color:'white', backgroundColor:'#0F243E', width:400, textAlign:'center'}}>Cluster 13</Text>
                    <Table style={{borderWidth:1,borderColor:'red', borderColor:'grey' }}>
                      <Row data={header1}/>
                      <Rows data={data1}/>
                    </Table>
            </View>

            <View style = {{marginTop:10}}>
                <Text style ={{fontSize:20,color:'white', backgroundColor:'#76933C', width:150}}> Completed Groups</Text>
            </View>
            <View style={{marginTop:10, backgroundColor:'#EBF1DE'}}>
                    <Text style={{fontSize:20, color:'white', backgroundColor:'#0F243E', width:400, textAlign:'center'}}>Cluster 1</Text>
                    <Table style={{borderWidth:1,borderColor:'red', borderColor:'grey' }}>
                        <Row data={header2}/>
                        <Rows data={data2}/>
                    </Table>
            </View>
    </View>

      </ScrollView>
    </SafeAreaView>
    

    
  )
};

const styles = StyleSheet.create({
    header:{
        fontSize:25,
        justifyContent:'flex-end',
        backgroundColor:'#0F243E',
        color:'white',
    },
    lg:{
        backgroundColor:'#76933C',
        fontSize:20,
        width:200,
        color:'white',
        margin:10,
    },
    cl:{


    },

});
export default Account
