// import React, { useState, useRef } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
//   LogBox,
//   ScrollView
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';
// import MyPager from './MyPager';


// export function HomeScreen({route,navigation}) {
      
//     return(
//         <ScrollView style={{flex:1,backgroundColor:'#fff',}}>
//         <View style={{flex:1,paddingBottom:30}}>
//             <View style={{flex:1}}>
//                 <View style={styles.headerPad}>
//                     <View style={styles.headpadCss}>
//                         <View style={{flexDirection:'row'}}>
//                             <Image source={require('../../assets/HomeScreen/NizLogo.png')} style={{height:50,width:50}} />
//                             <Text style={{fontSize:20,color:'#fff',left:20,top:10,fontWeight:'bold'}}>Hi, Nisha</Text>
//                         </View>
//                         <View style={{flexDirection:'row',top:10,columnGap:5}}>
//                             <Icon name="location-pin" size={20} color={'#fff'} style={{top:5}}/>
//                             <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Chennai</Text>
//                             <Icon name="chevron-small-down" size={25} color={'#fff'}/>
//                         </View>

//                     </View>
//                 </View>
//                 <View style={styles.headerpadBlue}>
//                     <MyPager />
//                 </View>
//                 <View style={styles.inputView}>
//                     <TextInput
//                         style={styles.TextInput}
//                         placeholder="Search by colleges/courses"
//                         placeholderTextColor="#003f5c"
//                     />
//                 </View>
                
//                     <View style={{padding:20,top:40}}>
//                         <View style={styles.fittotext}>
//                             <TouchableOpacity onPress={()=>navigation.navigate('CollegeList')}>       
//                                 <Text style={styles.textcss}>Engineering</Text>                     
//                                 <View style={styles.card}>
//                                     <Image style={styles.logo} source={require('../../assets/HomeScreen/engineering_1.png')} />
//                                 </View>
//                             </TouchableOpacity>
//                             <View>       
//                                 <Text style={styles.textcss}>Medicals</Text>                     
//                                 <View style={styles.card}>
//                                     <Image style={styles.logo} source={require('../../assets/HomeScreen/medical_1.png')} />
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={styles.fittotext}>
//                             <View>       
//                                 <Text style={styles.textcss}>Arts & Science</Text>                     
//                                 <View style={styles.card}>
//                                     <Image style={styles.logo} source={require('../../assets/HomeScreen/images.jpg')} />
//                                 </View>
//                             </View>
//                             <View>       
//                                 <Text style={styles.textcss}>Polytechnic</Text>                     
//                                 <View style={styles.card}>
//                                     <Image style={styles.logo} source={require('../../assets/HomeScreen/polytecnic_1.png')} />
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={styles.fittotext}>
//                             <View>       
//                                 <Text style={styles.textcss}>Nursing</Text>                     
//                                 <View style={styles.card}>
//                                     <Image style={styles.logo} source={require('../../assets/HomeScreen/nursing_1.png')} />
//                                 </View>
//                             </View>
//                             <View>       
//                                 <Text style={styles.textcss}>Pharmacy</Text>                     
//                                 <View style={styles.card}>
//                                     <Image style={styles.logo} source={require('../../assets/HomeScreen/Pharmacy_1.png')} />
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={styles.fittotext}>
//                             <View>       
//                                 <Text style={styles.textcss}>Physiotherapy</Text>                     
//                                 <View style={styles.card}>
//                                     <Image style={styles.logo} source={require('../../assets/HomeScreen/Physio_1.png')} />
//                                 </View>
//                             </View>
//                             <View>       
//                                 <Text style={styles.textcss}>Agriculture</Text>                     
//                                 <View style={styles.card}>
//                                     <Image style={styles.logo} source={require('../../assets/HomeScreen/agriculture_1.png')} />
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={styles.fittotext}>
//                             <View>       
//                                 <Text style={styles.textcss}>Management</Text>                     
//                                 <View style={styles.card}>
//                                     <Image style={styles.logo} source={require('../../assets/HomeScreen/management_1.png')} />
//                                 </View>
//                             </View>
//                             <View>       
//                                 <Text style={styles.textcss}>Paramedical</Text>                     
//                                 <View style={styles.card}>
//                                     <Image style={styles.logo} source={require('../../assets/HomeScreen/paramedical_1.png')} />
//                                 </View>
//                             </View>
//                         </View>
                        

//                     </View>
                
//             </View>
//         </View>
//         </ScrollView>
//     )

// }

// const styles = StyleSheet.create({
//     card:{
//         height:100,
//         width:150,
//         borderRadius:20,
//     },
//     fittotext:{
//         flexDirection:'row',
//         justifyContent:'space-around'
//     },
//     headerpadBlue:{
//         height:150,
//         width:'80%',
//         position:'absolute',
//         backgroundColor:'#596697',
//         borderRadius:10,
//         alignSelf:'center',
//         top:150
//     },
//     headerPad:{
//         minHeight:250,
//         // borderBottomLeftRadius:20,
//         // borderBottomRightRadius:20,
//         backgroundColor:'#1DA69A',
//     },
//     headpadCss:{
//         flexDirection:'row',
//         top:60,
//         justifyContent:'space-between',
//         margin:20
//     },
//     headpad:{
//         height:50,
//         width:50,
//         borderRadius:10,
//         backgroundColor:'#fff',
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     headerText:{
//         textAlign:'center',
//         fontSize:18,
//         fontWeight:'bold',
//         color:'#fff',
//         top:10,
//     },
//     container: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         margin:10,
//         alignSelf:'center'
//       },
//       input: {
//         width: 50,
//         height: 50,
//         borderWidth: 1,
//         borderRadius: 10,
//         textAlign: 'center',
//         fontSize: 20,
//         marginHorizontal: 5,
//       },
//       loginBtn: {
//         width: '90%',
//         borderRadius: 10,
//         height: 60,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#FCB301',
//         alignSelf:'center'
//       },
//       loginText:{
//         fontSize:18,
//         color:'#fff',
//         fontWeight:'bold'
//       },
//       inputView: {
//         marginTop:20,
//         marginLeft:5,
//         marginRight:5,
//         borderColor:'#313955',
//         height:50,
//         width:'90%',
//         borderWidth:1,
//         alignSelf:'center',
//         top:40,
//         borderRadius:20,
//         padding:10
//       },
//       TextInput: {
//         height: 40,
//         flex: 1,
//         fontWeight:'bold',
//         textAlign:'left',
//       },
//       textcss:{
//         fontSize:16,
//         fontWeight:'bold',
//         color:'#313955',
//         padding:10
//       },
//       fontcss:{
//         fontSize:13,
//         fontWeight:'bold',
//         color:'#313955',
//       },
//       section: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginRight:20,
//         marginLeft:20
//       },
//       checkbox: {
//         margin: 8,
//         backgroundColor:'#313955',
//         borderColor:'#313955'
//       },
//       logo: {
//         height:'100%',
//         width:'100%',
//         borderRadius:20  
//       },

// })