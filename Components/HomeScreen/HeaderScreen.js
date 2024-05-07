import React, {  useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


export function HeaderScreen({route,navigation}) {
    return(
        <View style={styles.headerPad}>
            <View style={styles.headpadCss}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <View style={styles.headpad}>
                        <Icon name="chevron-left" size={30}/>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.headerText}>Event</Text>
                </View>
                <View style={[styles.headpad,{opacity:0}]}></View>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    headerPad:{
        height:150,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        backgroundColor:'#1D2F59',
    },
    headpadCss:{
        flexDirection:'row',
        marginTop:60,
        justifyContent:'space-between',
        paddingHorizontal:10,
        margin:10
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
})