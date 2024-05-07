import React, { useState,useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export function AgentDetails({route,navigation}) {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [selectedIndexColor, setSelectedIndexColor] = useState(0);
    let AgentData = [
        {'name':'Vinoth Kumar','dept':'Computer Science','date':'12 Apr 2023','time':'12.30 AM','paid':'5000'},
        {'name':'Alex','dept':'Mech Science','date':'18 Apr 2023','time':'10.30 AM','paid':'4000'},
        {'name':'Aro','dept':'Arts Science','date':'13 Apr 2023','time':'12.30 AM','paid':'2000'},
        {'name':'Mani','dept':'Biology Science','date':'12 Apr 2023','time':'1.30 AM','paid':'1000'},
        {'name':'King','dept':'Physics Science','date':'15 Apr 2023','time':'9.30 AM','paid':'8000'},
        {'name':'Chella','dept':'Maths','date':'12 Apr 2023','time':'12.30 AM','paid':'10000'},
    ]
    
    const toggleColor = (val) =>{
        if(val ==1 ){
            setSelectedIndex(1)
            setSelectedIndexColor(0)
        }else{
            setSelectedIndex(0)
            setSelectedIndexColor(1)

        }

    }

    return(
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <View style={styles.headerPad}>
                <View style={styles.headpadCss}>
                    <TouchableOpacity onPress={()=>navigation.goBack()} style={{width:'20%'}}>
                        <View style={styles.headpad}>
                            <Icon name="chevron-left" size={30}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{width:'60%'}}>
                        <Text style={styles.headerText}>Agent Details</Text>
                    </View>
                    <View style={[styles.headpad,{opacity:0,width:'20%'}]}></View>
                </View>
                <View style={[styles.inputView,{flexDirection:'row',alignItems:'center'}]}>
                    <TextInput
                        style={[styles.TextInput,{textAlign:'left',padding:10,left:20,opacity:0.5}]}
                        placeholder="Search by colleges/courses"
                        placeholderTextColor="#313955"
                        onChangeText={(text)=>setSearchText(text)}
                    />
                    <Image  source={require('../../assets/Agent/searchbar.png')} style={{height:40,width:40}}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',margin:30}}>
                    <TouchableOpacity onPress={()=>toggleColor(1)}>
                        <Text style={selectedIndex?[styles.textcss,{color:'#FEC265'}]:[styles.textcss]}>Admitted</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>toggleColor(0)}>
                        <Text style={selectedIndexColor?[styles.textcss,{color:'#FEC265'}]:[styles.textcss]}>Cancelled</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{flex:1}}>
                <View style={{padding:20}}>
                {
                        AgentData.map((item,index)=>(
                            <View style={styles.card} key={index}>     
                                <Text style={{fontSize:17,color:'#313955',fontWeight:'bold',paddingLeft:15,paddingTop:20}}>{item.name}</Text>
                                <Text style={{fontSize:14,color:'#1DA79B',fontWeight:'bold',paddingLeft:15,paddingTop:5}}>{item.dept}</Text>
                                <View style={{flexDirection:'row',justifyContent:'space-around',margin:10,top:20}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontSize:13,fontWeight:'bold',color:'#FCB301'}}>Date:</Text>
                                        <Text style={{fontSize:13,fontWeight:'bold',color:'#313955'}}>{item.date}</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontSize:13,fontWeight:'bold',color:'#FCB301'}}>Time:</Text>
                                        <Text style={{fontSize:13,fontWeight:'bold',color:'#313955'}}>{item.time}</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontSize:13,fontWeight:'bold',color:'#313955'}}>Paid:</Text>
                                        <Text style={{fontSize:13,fontWeight:'bold',color:'red'}}>{item.paid}</Text>
                                    </View>
                                </View>
                            </View>                            
                        ))
                    }

                    
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    card:{
        height:150,
        width:'100%',
        alignSelf:'center',
        backgroundColor:'#F7F8FA',
        borderRadius:10,
        margin:10
    },
    textcss:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff'
    },
    fittotext:{
        flexDirection:'row',
        columnGap:10,
        margin:15
    },
    headerPad:{
        minHeight:200,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        backgroundColor:'#313955',
    },
    headpadCss:{
        flexDirection:'row',
        marginTop:60,
        justifyContent:'space-between',
        paddingHorizontal:10,
        margin:10,
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
    },
    inputView: {
        borderColor:'#fff',
        height:50,
        width:'90%',
        borderWidth:1,
        alignSelf:'center',
        borderRadius:10,
        backgroundColor:'#fff'
      },
      TextInput: {
        height: 40,
        flex: 1,
        fontWeight:'bold',
        textAlign:'center'
      },

})