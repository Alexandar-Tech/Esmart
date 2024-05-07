import React, {  useState,useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  LogBox,
  Alert
} from 'react-native';
import axios from 'axios';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { API_SENTOTP,API_GETCOUNTRY } from '../../APILIST/APILIST';
import { StatusBar } from 'expo-status-bar';
import { SelectCountry } from 'react-native-element-dropdown';
import Modal from "react-native-modal";

export default function HomepageLoginScreen() {
    const [couData, setCouData] = useState([]);
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [isChecked, setChecked] = useState(false);
    const [isScreen, setIsScreen] = useState(1);
    const [isModalVisible, setModalVisible] = useState(false);
    const [errorMsg,setErrorMsg] = useState(null);

    useEffect(() => {
      // Fetch data when the component mounts
      axios.post(API_GETCOUNTRY)
      .then(response => {
        setCouData(response.data.data);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
      }, []);

    const toggleOTP = () =>{        
        // if(!phoneNumber){
        //     setModalVisible(true)
        //     return
        // }else if(phoneNumber.length != 10){
        //     Alert.alert('Please Enter 10 digit Number !!')
        //     return        
        // }
        if(!isChecked){
            setErrorMsg('Please Check terms and Conditions !')
            setModalVisible(true)
            return
        }

        const fetchData = async () => {
            const resp = await fetch(API_SENTOTP,{
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "phone_no" : phoneNumber, 
              }),
        
            })    
            const response = await resp.json();
            if (response.success == '1'){
              navigation.navigate('OTPScreen',{
                Number:phoneNumber
            })     
            }else{
              setErrorMsg(response.msg)
              setModalVisible(true)
            }
          };
    fetchData()

    }

    const SelectCountryScreen = _props => {
      const [country, setCountry] = useState('1');  
      return (
        <SelectCountry
          style={styles.dropdown}
          selectedTextStyle={styles.selectedTextStyle}
          placeholderStyle={styles.placeholderStyle}
          imageStyle={styles.imageStyle}
          inputSearchStyle={styles.inputSearchStyle}
          search
          maxHeight={200}
          value={country}
          data={couData}
          valueField="id"
          labelField="phonecode"
          placeholder="country"
          searchPlaceholder="Search..."
          onChange={e => {
            setCountry(e.id);
          }}
        />
      );
    };

      return(
        <>
        {
            isScreen?(
                <>
                <LinearGradient
                    colors={['#313955', 'white']}
                    style={{flex:1}}
                    start={{x: 0.5, y: 0.2}} end={{x: 0.5, y: 0}}>
                        <Modal 
                          isVisible={isModalVisible}
                          style={styles.modelcontainer}
                          onBackdropPress={() => setModalVisible(false)}
                          swipeDirection={['down']}
                          onSwipeComplete={() => setModalVisible(false)}
                          >
                              <View style={styles.modelView}>
                                {
                                  errorMsg?<Text style={{fontSize:15,fontWeight:'bold',top:30}}>{errorMsg}</Text>:null
                                }
                                
                                <TouchableOpacity style={{top:70,height:50,width:'100%',alignSelf:'center',backgroundColor:'#313955',alignItems:'center',justifyContent:'center',borderRadius:10}} onPress={()=>setModalVisible(false)}>
                                  <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Ok</Text>
                                </TouchableOpacity>
                              </View>
                        </Modal>
                        <StatusBar style='auto' />
                        <View style={{height:'100%'}}>
                            <View style={{height:'67%'}}>
                                <Image style={styles.logo} source={require('../../assets/HomeScreen/splash_header_image.png')} />
                            </View>
                            
                            <View style={{height:'35%'}}>
                                <Text style={styles.fontcss}>Phone Number</Text>
                                <View style={styles.LoginPadding}>
                                    <View style={styles.fixToText}>
                                        <View style={{width:'30%'}}>
                                            <SelectCountryScreen />
                                        </View>
                                        <View style={{width:'70%'}}>
                                        <TextInput
                                            style={styles.TextInput}
                                            placeholder="Phone Number"
                                            placeholderTextColor="#003f5c"
                                            inputMode="numeric"
                                            onChangeText={text=>setPhoneNumber(text)}
                                            value={phoneNumber}
                                            maxLength={10}
                                        />
                                            
                                        </View>
                                    </View>
                                </View>
                                
                                <View style={styles.section}>
                                    <Checkbox
                                        style={styles.checkbox}
                                        value={isChecked}
                                        onValueChange={setChecked}
                                        color={isChecked ? '#FCB301' : undefined}
                                    />
                                    <Text style={styles.fontcss}>By signing , I agree to the <Text style={{color:'#FCB301'}}>Terms & Conditions</Text> and <Text style={{color:'#FCB301'}}>Privacy Policy</Text> of Nizcrae</Text>
                                </View>
                                <TouchableOpacity style={styles.loginBtn} onPress={()=>toggleOTP()}>
                                    <Text style={styles.loginText}>
                                        Continue
                                    </Text>

                                </TouchableOpacity>
                            </View>

                        </View>                        
                </LinearGradient>
                </>                
            ):null
        }
            
        </>
    )

  }


  const styles = StyleSheet.create({

  fontcss:{
    fontSize:16,
    fontWeight:'bold',
    color:'#fff',
    padding:20
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%',
    margin:10
  },
  LoginPadding: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    height:50,
    width:'90%',
    alignSelf:'center'
  },
  logo: {
    height:'100%',
    width:'100%',
    padding:10   
  },
  inputView: {
    top: 20,
    left: 40,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    width: '80%',
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 40,
    flex: 1,
    paddingRight: 20,
    marginLeft: 60,
    fontSize:15,
    fontWeight:'bold'
    
  },

  loginBtn: {
    width: '90%',
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCB301',
    alignSelf:'center'
  },
  dropdown: {
    height: 30,
  },
  icon: {
    height:35,
    width:35
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    zIndex: 999,
    fontSize: 14,
    fontWeight:'bold',
    
  },
  placeholderStyle: {
    fontSize: 14,
    fontWeight:'bold',
    
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight:'bold',
    marginLeft:30
    
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:20,
    marginLeft:20
  },
  checkbox: {
    margin: 8,
    backgroundColor:'#fff',
    borderColor:'#fff'
  },
  loginText:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold'
  },
  container: {

  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  modelcontainer:{
    margin: 10,
    justifyContent:'center'
  },
  modelView:{
    backgroundColor: 'white', 
    padding: 16,
    height:170,
    borderRadius:20,
    alignItems:'center'
  },
});