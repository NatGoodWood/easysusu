import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView,ScrollView, Text, View, TouchableOpacity, TextInput, Keyboard, Alert} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import Input from './components/Input';
import Button from './components/Button';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Loader from './components/Loader';

const Registration = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email:'',
    surname:'', 
    firstname:'',
    password:'',
    repassword:'',
    phonenumber:'',
    gender:''
  });
  const [errors, setErrors] = React.useState({});
  const [loading,setLoading] = React.useState(false);
  const validate =() => {
    Keyboard.dismiss();
    let valid= true;
    if(!inputs.email) {
      handleError("Please input email","email");
      valid = false;
    }else if(!inputs.email.match(/\S+@\S+\.\S+/)){
      handleError("Please input valid email","email");
    }

    if(!inputs.surname){
      handleError("Please input a surname","surname");
    }
    if(!inputs.firstname){
      handleError("Please input a firstname","firstname");
    }
    if(!inputs.phone){
      handleError("Please input a phone number","phone");
    }
    if(!inputs.password){
      handleError("Please input a password","password");
    }else if (inputs.password.length< 5){
      handleError("Min password lenght of 5","password");
    }
    // if(!inputs.repassword){
    //   handleError("Please re-enter your password","repassword");
    // }else if (inputs.repassword.length< 5){
    //   handleError("Min password lenght of 5","repassword");
    // }

    if (valid) {register();
    }
  };
  const register = () =>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      try {
        AsyncStorage.setItem("user", JSON.stringify(inputs));
        navigation.navigate("Login")
      } catch (error) {
        Alert.alert("Error","Something went wrong")
      }
    },3000);

  };
  const handleOnChange = (text, input) => {
    setInputs (prevState => ({...prevState,[input]:text}));
  };

  const handleError = (errorMessage,input)=>{
    setErrors (prevState => ({...prevState,[input]:errorMessage}));
  }
  

  const [selected,setSelected] = React.useState('Gender');
  const data = [
    {key:'1', value:''},
    {key:'2', value:'Male'},
    {key:'3', value:'Female'}
  ];
  
  const countryob =[
    {key:'1', value:''},
    {key:'2', value:'Afghanistan'},
    {key:'3', value:'Albania'},
    {key:'4', value:'Algeria'},
    {key:'5', value:'Andorra'},
    {key:'6', value:'Angola'},
    {key:'7', value:'Antigua and Barbuda'},
    {key:'8', value:'Argentina'},
    {key:'9', value:'Armenia'},
    {key:'10', value:'Australia'},
    {key:'11', value:'Austria'},
    {key:'12', value:'Azerbaijan'},
    {key:'13', value:'Bahamas'},
    {key:'14', value:'Bahrain'},
    {key:'15', value:'Barbados'},
    {key:'16', value:'Belarus'},
    {key:'17', value:'Belgium'},
    {key:'18', value:'Belize'},
    {key:'19', value:'Benin'},
    {key:'20', value:'Bhutan'},
    {key:'21', value:'Bolivia'},
    {key:'22', value:'Bosnia and Herzegovina'},
    {key:'23', value:'Botswana'},
    {key:'24', value:'Brazil'},
    {key:'25', value:'Brunei'},
    {key:'26', value:'Bulgaria'},
    {key:'27', value:'Burkina Faso'},
    {key:'28', value:'Burundi'},
    {key:'29', value:'Cabo Verde'},
    {key:'30', value:'Cambodia'},
    {key:'31', value:'Cameroon'},
    {key:'32', value:'Canada'},
    {key:'33', value:'Central African Republic'},
    {key:'34', value:'Chad'},
    {key:'35', value:'Chile'},
    {key:'36', value:'China'},
    {key:'37', value:'Colombia'},
    {key:'38', value:'Comoros'},
    {key:'39', value:'Congo,Democratic Republic'},
    {key:'40', value:'Costa Rica'},
    {key:'41', value:"Cote d'Ivoire"},
    {key:'42', value:'Croatia'},
    {key:'43', value:'Cuba'},
    {key:'44', value:'Cyprus'},
    {key:'45', value:'Czechia'},
    {key:'46', value:'Denmark'},
    {key:'47', value:'Djibouti'},
    {key:'48', value:'Dominica'},
    {key:'49', value:'Dominican Republic'},
    {key:'50', value:'Ecuador'},
    {key:'51', value:'Egypt'},
    {key:'52', value:'El Salvador'},
    {key:'53', value:'Equatorial Guinea'},
    {key:'54', value:'Eritrea'},
    {key:'55', value:'Estonia'},
    {key:'56', value:'Eswatini'},
    {key:'57', value:'Ethopia'},
    {key:'58', value:'Fiji'},
    {key:'59', value:'Finland'},
    {key:'60', value:'France'},
    {key:'61', value:'Gabon'},
    {key:'62', value:'Gambia'},
    {key:'63', value:'Georgia'},
    {key:'64', value:'Germany'},
    {key:'65', value:'Ghana'},
    {key:'66', value:'Greece'},
    {key:'67', value:'Grenada'},
    {key:'68', value:'Guatemala'},
    {key:'69', value:'Guinea'},
    {key:'70', value:'Guinea-Bissau'},
    {key:'71', value:'Guyana'},
    {key:'72', value:'Haiti'},
    {key:'73', value:'Honduras'},
    {key:'74', value:'Hungary'},
    {key:'75', value:'Iceland'},
    {key:'76', value:'India'},
    {key:'77', value:'Indonesia'},
    {key:'78', value:'Iran'},
    {key:'79', value:'Iraq'},
    {key:'80', value:'Ireland'},
    {key:'81', value:'Isreal'},
    {key:'82', value:'Italy'},
    {key:'83', value:'Jamaica'},
    {key:'84', value:'Japan'},
    {key:'85', value:'Jordan'},
    {key:'86', value:'Kazakhstan'},
    {key:'87', value:'Kenya'},
    {key:'88', value:'Kiribati'},
    {key:'89', value:'Kosovo'},
    {key:'90', value:'Kuwait'},
    {key:'91', value:'Kyrgyzstan'},
    {key:'92', value:'Laos'},
    {key:'93', value:'Latvia'},
    {key:'94', value:'Lebanon'},
    {key:'95', value:'Lesotho'},
    {key:'96', value:'Liberia'},
    {key:'97', value:'Libya'},
    {key:'98', value:'Liechtenstein'},
    {key:'99', value:'Lithuania'},
    {key:'100', value:'Luxembourg'},
    {key:'101', value:'Madagascar'},
    {key:'102', value:'Malawi'},
    {key:'103', value:'Maldives'},
    {key:'104', value:'Mali'},
    {key:'105', value:'Malta'},
    {key:'106', value:'Marshall Islands'},
    {key:'107', value:'Mauritania'},
    {key:'108', value:'Mauritius'},
    {key:'109', value:'Mexico'},
    {key:'110', value:'Micronesia'},
    {key:'111', value:'Moldova'},
    {key:'112', value:'Monaco'},
    {key:'113', value:'Mongolia'},
    {key:'114', value:'Montenegro'},
    {key:'115', value:'Morocco'},
    {key:'116', value:'Mozambique'},
    {key:'117', value:'Myanmar'},
    {key:'118', value:'Namibia'},
    {key:'119', value:'Nauru'},
    {key:'120', value:'Nepal'},
    {key:'121', value:'Netherlands'},
    {key:'122', value:'New Zealand'},
    {key:'123', value:'Nicaragua'},
    {key:'124', value:'Niger'},
    {key:'125', value:'Nigeria'},
    {key:'126', value:'North Korea'},
    {key:'127', value:'North Macedonia'},
    {key:'128', value:'Norway'},
    {key:'129', value:'Oman'},
    {key:'130', value:'Pakistan'},
    {key:'131', value:'Palau'},
    {key:'132', value:'Palestine'},
    {key:'133', value:'Panama'},
    {key:'134', value:'Papua New Guinea'},
    {key:'135', value:'Paraguay'},
    {key:'136', value:'Peru'},
    {key:'137', value:'Philippines'},
    {key:'138', value:'Poland'},
    {key:'139', value:'Portugal'},
    {key:'140', value:'Qatar'},
    {key:'141', value:'Romania'},
    {key:'142', value:'Russia'},
    {key:'143', value:'Rwanda'},
    {key:'144', value:'Saint Kitts and Nevis'},
    {key:'145', value:'Saint Lucia'},
    {key:'146', value:'Saint Vincent and the Grenadines'},
    {key:'147', value:'Samoa'},
    {key:'148', value:'San Marino'},
    {key:'149', value:'Sao Tome and Principe'},
    {key:'150', value:'Saudi Arabia'},
    {key:'151', value:'Senegal'},
    {key:'152', value:'Serbia'},
    {key:'153', value:'Seychelles'},
    {key:'154', value:'Sierra Leone'},
    {key:'155', value:'Singapore'},
    {key:'156', value:'Slovakia'},
    {key:'157', value:'Slovenia'},
    {key:'158', value:'Solomon Islands'},
    {key:'159', value:'Somalia'},
    {key:'160', value:'South Africa'},
    {key:'161', value:'South Korea'},
    {key:'162', value:'South Sudan'},
    {key:'163', value:'Spain'},
    {key:'164', value:'Sri Lanka'},
    {key:'165', value:'Sudan'},
    {key:'166', value:'Suriname'},
    {key:'167', value:'Sweden'},
    {key:'168', value:'Switzerland'},
    {key:'169', value:'Syria'},
    {key:'170', value:'Taiwan'},
    {key:'171', value:'Tajikistan'},
    {key:'172', value:'Tanzania'},
    {key:'173', value:'Thailand'},
    {key:'174', value:'Timor-Leste'},
    {key:'175', value:'Togo'},
    {key:'176', value:'Tonga'},
    {key:'177', value:'Trinidad and Tobago'},
    {key:'178', value:'Tunisia'},
    {key:'179', value:'Turkey'},
    {key:'180', value:'Turkmenistan'},
    {key:'181', value:'Tuvalu'},
    {key:'182', value:'Uganda'},
    {key:'183', value:'United Arab Emirates (UAE)'},
    {key:'184', value:'United Kingdom (UK)'},
    {key:'185', value:'United States of America (USA)'},
    {key:'186', value:'Uruguay'},
    {key:'187', value:'Uzbekistan'},
    {key:'188', value:'Vanuatu'},
    {key:'189', value:'Vatican City (Holy See)'},
    {key:'190', value:'Venezuela'},
    {key:'191', value:'Vietnam'},
    {key:'192', value:'Yemen'},
    {key:'193', value:'Zambia'},
    {key:'194', value:'Zimbabwe'},
  ]
  const country =[
    {key:'1', value:''},
    {key:'2', value:'United Kingdom'},
    {key:'3', value:'United States'},
    {key:'4', value:'Canada'},
    {key:'5', value:'Ghana'},
  ]
  const [date, setDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const getDateOfBirth = () => {
    let newDate = new Date(date).toLocaleDateString();
    return date !== "" ? newDate : "";
  };

  return <SafeAreaView style ={{backgroundColor:'#fff', flex:1}}>
    <Loader visible={loading}/>
    <ScrollView contentContainerStyle ={{paddingTop:50,paddingHorizontal:20}}>
      <Text style={{color:'black', fontSize:35, fontWeight:'bold'}}>Register</Text>
      <Text style={{color:'grey', fontSize:18, marginVertical:10}}>Enter Your Details to Register</Text>
      <View style={{marginVertical:5}}></View>

      <Input 
      placeholder="Surname, Middlename, Firstname" 
      label="Fullname" 
      error={errors.fullname}
      onFocus={() =>{
        handleError(null, 'fullname');
      }}
      iconName="account-outline" 
      onChangeText = {(text)=>handleOnChange(text,"fullname")}
      />

      
      <Input 
      placeholder="Enter your email" 
      iconName="email-outline" 
      error={errors.email}
      onFocus={() =>{
        handleError(null, 'email');
      }}
      label="Email" 
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

      <Input 
      placeholder="Re-Enter your password" 
      iconName="lock-outline" 
      label="Confirm Password" 
      error={errors.repassword}
      onFocus={() =>{
        handleError(null, 'password');
      }}
      password 
      />

      <Input 
      keyboardType= "numeric" 
      placeholder="233-xxx-xxx-xx" 
      label="Phone Number" 
      error={errors.phone}
      onFocus={() =>{
        handleError(null, 'phone');
      }}
      iconName="phone-dial"
      onChangeText = {(text)=>handleOnChange(text,"phone")}
      />

      <SelectList data ={data} setSelected={setSelected} placeholder='Gender' error={errors.gender}
      onFocus={() =>{
        handleError(null, 'gender');
      }}/>
      <View style={{marginVertical:5}}>
      <SelectList data={countryob} setSelected={setSelected} placeholder='Country Of Birth'/>
      </View>
      <View style={{marginVertical:5}}>
      <SelectList data={country} setSelected={setSelected} placeholder='Country Of Residence'/>
      </View>

      <TouchableOpacity onPress={showDatePicker} style={{paddingVertical: 1,marginTop: 5,paddingHorizontal: 2,borderRadius: 10}} activeOpacity={0.8}>
        <Text>Select Date of Birth</Text>
        <TextInput style={{borderWidth: 1, borderRadius:10,borderColor: "black",marginVertical: 5,padding: 5,width: 300}} value={getDateOfBirth()} placeholder="MM/DD/YEAR"/>
        <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} display={'calender'}/>
      </TouchableOpacity>
      
      
      <Button title='Register' onPress={validate}/>
      <Text 
      onPress={()=> navigation.navigate('Login')} 
      style={{color:'grey',textAlign:'center',marginTop:5, fontSize:16}}> Already Have an Account? Login </Text>
     
    </ScrollView>
  </SafeAreaView>
};

export default Registration; 
