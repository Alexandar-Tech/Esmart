import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView,ActivityIndicator,Image,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { API_COLLEGELISTAGENT,API_SENTCOLLEGELISTAGENT } from '../../APILIST/APILIST';
import { ButtonGroup } from '@rneui/themed';
import Modal from "react-native-modal";
import MultiCheckBox from './MultipleCheckBox';

export function CollegeAgent({route,navigation}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibleMsg, setModalVisibleMsg] = useState(false);
    const [searchText, setSearchText] = useState(null);
    const [errorMsg,setErrorMsg] = useState(null);
    const [selectedDate, setSelectedDate] = useState({});      

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        axios.post(API_COLLEGELISTAGENT,{
            "user_id" : 2213
        })
        .then(response => {
            setData(response.data);
            setLoading(false)
        })
        .catch(error => {
            setData(error.response.data);
            setLoading(true)
        });
    }, [searchText]); 
    
    const fetchData = async () => {
        const resp = await fetch(API_SENTCOLLEGELISTAGENT,{
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "user_id" : 2213,
            "org_id_arr" : Object.keys(selectedDate)
          }),
    
        })    
        const response = await resp.json();
        setErrorMsg(response.msg)
        setModalVisibleMsg(true)
        
      };

    return(
        <>
            <LinearGradient
                colors={['#F7F8FA', '#F7F8FA']}
                style={{flex:1}}
                start={{x: 0, y: 1}} end={{x: 0, y: 1}}>
                    <Modal 
                    isVisible={isModalVisible}
                    style={styles.modelcontainer}
                    onBackdropPress={() => setModalVisible(false)}
                    swipeDirection={['down']}
                    onSwipeComplete={() => setModalVisible(false)}
                    >
                        <View style={styles.modelView}>
                            <View >
                                <Text style={{fontWeight:'bold',color:'#313955',alignSelf:'center',fontSize:18,margin:10}}> Admission/ Admission details  </Text>
                                    <View style={{flexDirection:'row',width:'100%'}}>
                                        <TouchableOpacity style={styles.fontcss} onPress={()=>navigation.navigate('AdmissionForm')}>
                                            <Text style={{color:'#fff',fontWeight:'bold'}}>Admission Form</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.fontcss} onPress={()=>navigation.navigate('AgentAdmissionDetail')}>
                                            <Text style={{color:'#fff',fontWeight:'bold'}}>Admission Details</Text>
                                        </TouchableOpacity>
                                    </View>
                                    
                            </View>
                        </View>
                    </Modal>
                    <Modal 
                          isVisible={isModalVisibleMsg}
                          style={styles.modelcontainerMsg}
                          onBackdropPress={() => setModalVisibleMsg(false)}
                          swipeDirection={['down']}
                          onSwipeComplete={() => setModalVisibleMsg(false)}
                          >
                              <View style={styles.modelViewMsg}>
                                {
                                  errorMsg?<Text style={{fontSize:15,fontWeight:'bold',top:30,alignSelf:'center'}}>{errorMsg}</Text>:null
                                }
                                
                                <TouchableOpacity style={styles.modalBtn} onPress={()=>setModalVisibleMsg(false)}>
                                  <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Ok</Text>
                                </TouchableOpacity>
                              </View>
                        </Modal>
                <View style={{ flex: 1}}>
                    <View style={styles.headerPad}>
                        <View style={styles.headpadCss}>
                            <TouchableOpacity onPress={()=>navigation.goBack()} style={{width:'20%'}}>
                                <View style={styles.headpad}>
                                    <Icon name="chevron-left" size={30}/>
                                </View>
                            </TouchableOpacity>
                            <View style={{width:'70%'}}>
                                <Text style={styles.headerText}>Colleges List</Text>
                            </View>
                            <View style={[styles.headpad,{opacity:0,width:'20%'}]}></View>
                        </View>
                        <View style={{paddingVertical:20}}>
                            <ButtonGroup
                            buttons={['All Colleges', 'Associated Colleges']}
                            selectedIndex={selectedIndex}
                            onPress={(value) => {
                                setSelectedIndex(value);
                            }}
                            containerStyle={{ borderRadius:10,height:50,borderRadius:30,backgroundColor:'#fff'}}
                            textStyle={{fontSize:16,fontWeight:'bold'}}
                            buttonStyle={{borderRadius:30}}
                            innerBorderStyle={{color:'#fff'}}
                            selectedButtonStyle = {{backgroundColor:'#FCB301'}}
                            />  
                        </View>
                    </View>
                    <ScrollView style={{flex:1}}>
                        <View style={{paddingTop:5,paddingBottom:10,paddingLeft:10,paddingRight:10}}>
                            {
                                loading?(
                                    <View>
                                        {
                                            data?(<View style={{justifyContent:'center',alignItems:'center',flex:1,marginTop:200}}>
                                                <Text style={{fontSize:18,fontWeight:'bold',color:'red'}}>{data.msg}</Text>
                                                </View>):<ActivityIndicator size="large" color="#0000ff" />
                                        }
                                        
                                    </View>
                                ):(
                                <View>
                                    {
                                        !selectedIndex?(
                                            <View>
                                                <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
                                                    {
                                                        data['data']['all_colleges']?<Text style={{fontSize:16,fontWeight:'bold',top:10}}>{data.data.all_colleges.length} Colleges</Text>:<Text style={{fontSize:16,fontWeight:'bold',}}>0 College</Text>
                                                    }
                                                    
                                                    {/* <TouchableOpacity onPress={()=>toggleModal()}>
                                                    <IconMC name="filter-menu-outline" size={30} style={{bottom:5}}/>
                                                    </TouchableOpacity> */}
                                                    <TouchableOpacity style={{padding:10,backgroundColor:'#313955',borderRadius:10,margin:5}} onPress={()=>navigation.navigate('AgentSignUp')}>
                                                        <Text style={{color:'#fff',fontWeight:'bold'}}>Add Agent</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={[styles.inputView,{opacity:0.5}]}>
                                                    <TextInput
                                                        style={[styles.TextInput,{textAlign:'left',padding:10,left:20}]}
                                                        placeholder="Search by colleges/courses"
                                                        placeholderTextColor="#313955"
                                                        onChangeText={(text)=>setSearchText(text)}
                                                    />
                                                </View> 
                                                {
                                        
                                                    data.data?(
                                                    data['data']['all_colleges'].map((item,index)=>(
                                                        <View key={item.id}>                                                            
                                                            <View style={{flexDirection:'row',alignSelf:'center'}}>
                                                                <View style={item.consultant_request.length == 0?[styles.CollegePad,{backgroundColor:'#fff'}]:[styles.CollegePad,{backgroundColor:'gray',opacity:0.4}]}>
                                                                    <View style={{width:'40%'}}>
                                                                        <Image source={require('../../assets/College/universities.png')} style={{height:140,width:'100%',margin:10,borderRadius:10}}  />
                                                                    </View>
                                                                    
                                                                    <View style={{width:'45%',margin:10,paddingLeft:20}}>
                                                                        <View style={{flexDirection:'row',width:'100%',columnGap:30}}>
                                                                            <View style={{padding:10,backgroundColor:'#313955',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                                                                                <Text style={{fontSize:15,fontWeight:'bold',color:'#fff'}}>Associate</Text>
                                                                            </View>
                                                                            {
                                                                                item.consultant_request.length != 0?null:<MultiCheckBox dataId={item.id}  onSelectDate={setSelectedDate} selected={selectedDate} />
                                                                            }
                                                                            
                                                                        </View>   
                                                                        <Text style={{fontSize:15,fontWeight:'bold',color:'#313955',padding:10}}>{item.name}</Text>
                                                                        
                                                                        <View style={{flexDirection:'row',width:'100%',top:20}}>
                                                                            <View style={{width:'70%',flexDirection:'row',top:10}}>
                                                                                <Icon name="location-pin" size={20} color={'#313955'}/>
                                                                                <Text style={{fontSize:14,fontWeight:'bold',color:'#313955'}}>{item.city.name}</Text>
                                                                            </View>
                                                                            <View style={{width:'50%'}}>
                                                                                <View style={{alignSelf:'flex-end',height:30,width:30,backgroundColor:'#FCB301',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                                                                                    <IconMC name='navigation-variant' size={20} color={'#fff'}/>                                                                    
                                                                                </View>
                                                                            </View>
                                                                            
                                                                            
                                                                        </View>
                                                                    </View>    
                                                                </View>                                                    
                                                            </View>                                              
                                                        </View>
                                                    ))                                                
                                                ):null
                                                }
                                            </View>
                                            ):
                                            (
                                                <View>
                                                    {
                                                        data['data']['associate_colleges']?<Text style={{fontSize:16,fontWeight:'bold',top:10}}>{data.data.associate_colleges.length} Colleges</Text>:<Text style={{fontSize:16,fontWeight:'bold',}}>0 College</Text>
                                                    }
                                                    {
                                                        data.data.associate_colleges.length != 0?(
                                                        data['data']['associate_colleges'].map((item,index)=>(
                                                            <View key={item.id}>
                                                                <TouchableOpacity onPress={()=>toggleModal()}>
                                                                <View style={{flexDirection:'row',alignSelf:'center'}}>
                                                                    <View style={{flex:1,paddingBottom:30,backgroundColor:'#fff',borderRadius:20,margin:10,flexDirection:'row',borderColor:'#fff',borderWidth:1}}>
                                                                        <View style={{width:'45%'}}>
                                                                            <Image source={require('../../assets/College/universities.png')} style={{height:140,width:'100%',margin:10,borderRadius:10}}  />
                                                                        </View>
                                                                        
                                                                        <View style={{width:'45%',margin:10,paddingLeft:20}}>
                                                                            <View>
                                                                                <View style={{padding:8,backgroundColor:'#FCB301',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                                                                                    <Text style={{fontSize:14,fontWeight:'bold'}}>Associated</Text>
                                                                                </View>
                                                                            </View>   
                                                                            <Text style={{fontSize:15,fontWeight:'bold',color:'#313955',padding:10}}>{item.name}</Text>
                                                                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                                                                <View>
                                                                                    <Text style={{fontSize:15,fontWeight:'bold',color:'#313955'}}>Admitted</Text>
                                                                                    <Text style={{fontSize:15,fontWeight:'bold',color:'#313955',alignSelf:'center'}}>{item.admission_count}</Text>
                                                                                </View>
                                                                                
                                                                                <View>
                                                                                    <Text style={{fontSize:15,fontWeight:'bold',color:'#313955'}}>Cancelled</Text>
                                                                                    <Text style={{fontSize:15,fontWeight:'bold',color:'#313955',alignSelf:'center'}}>{item.cancel_count}</Text>
                                                                                </View>
                                                                            </View>
                                                                            <View style={{flexDirection:'row',width:'100%',top:20}}>
                                                                                <View style={{width:'65%',flexDirection:'row',top:10}}>
                                                                                    <Icon name="location-pin" size={20} color={'#313955'}/>
                                                                                    <Text style={{fontSize:14,fontWeight:'bold',color:'#313955'}}>{item.city.name}</Text>
                                                                                </View>
                                                                                <View style={{width:'40%'}}>
                                                                                    <View style={{alignSelf:'flex-end',height:30,width:30,backgroundColor:'#FCB301',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                                                                                        <IconMC name='navigation-variant' size={20} color={'#fff'}/>                                                                    
                                                                                    </View>
                                                                                </View>
                                                                            </View>
                                                                        </View>    
                                                                    </View>                                                    
                                                                </View>        
                                                                </TouchableOpacity>                                        
                                                            </View>
                                                        ))                                            
                                                    ):(
                                                        <View style={{justifyContent:'center',alignItems:'center',flex:1,backgroundColor:'#313955',padding:15,borderRadius:10,top:10}}>
                                                            <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>Courses Not Found!!</Text>
                                                        </View>
                                                    )
                                                }
                                            </View>
                                            )
                                    }
                                    
                                </View>
                                )
                            }
                                    
                        </View>
                    </ScrollView>
                    {
                        !selectedIndex?(
                        <TouchableOpacity style={styles.loginBtn} onPress={()=>fetchData()}>
                            <Text style={styles.loginText}>
                                Send Tieup Request
                            </Text>
                        </TouchableOpacity>
                        ):null
                    }
                    
                </View>
            </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    headerPad:{
        minHeight:140,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        backgroundColor:'#313955',
    },
  headpadCss:{
      flexDirection:'row',
      marginTop:60,
      justifyContent:'space-between',
      margin:15,
      width:'100%'
  },
  headpad:{
      height:50,
      width:50,
      borderRadius:10,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center'
  },
  headerText:{
      textAlign:'center',
      fontSize:18,
      fontWeight:'bold',
      color:'#fff',
      top:10,
      right:20
  },
  inputView: {
    borderColor:'#313955',
    height:50,
    width:'100%',
    borderWidth:1,
    alignSelf:'center',
    borderRadius:20
  },
  TextInput: {
    height: 40,
    flex: 1,
    fontWeight:'bold',
    textAlign:'center'
  },
  modelcontainer:{
    margin: 0,
    justifyContent:'flex-end'
  },
  modelcontainerMsg:{
    justifyContent:'center'
  },
  modelViewMsg:{
    backgroundColor: 'white', 
    padding: 16,
    height:200,
    borderRadius:20
  },
  modelView:{
    backgroundColor: 'white', 
    padding: 16,
    height:250,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
  },
  checkbox: {
    top:10,
    marginLeft:10,
    borderColor:'#313955',
    borderRadius:5
  },
  loginBtn: {
    width: '90%',
    borderRadius: 15,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCB301',
    alignSelf:'center'
  },
  loginText:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold'
  },
  fontcss:{
    backgroundColor:'#313955',
    height:100,
    width:'45%',
    margin:10,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
  },
  CollegePad:{
    width:'100%',
    borderRadius:20,
    margin:10,
    flexDirection:'row',
    borderColor:'#fff',
    borderWidth:1,
    paddingBottom:10,
    flex:1
  },
  modalBtn:{
    top:70,
    height:50,
    width:'100%',
    alignSelf:'center',
    backgroundColor:'#313955',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  }
  
})