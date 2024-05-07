import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
    Text,
    Image,
    StyleSheet
  } from 'react-native';
import IconFA from 'react-native-vector-icons/Feather';
import IconEA from 'react-native-vector-icons/EvilIcons';

import Chat from './Chat';
import { CollegeList } from '../HomeScreen/CollegeList';
import { MainCollege } from '../CollegeScreens/MainCollege';
import { EnquiryForm } from '../CollegeScreens/EnquiryForm';
import { MyProfile } from '../Student/MyProfile';
import { CollegeAgent } from '../Agent/CollegeAgent';
import { AdmissionForm } from '../Agent/AdmissionForm';
import { AgentSignUp } from '../Agent/AgentSignUp';
import { AgentAdmissionDetail } from '../Agent/AgentAdmissionDetails';
import { ConsultantDetails } from '../Agent/ConsultantDetails';
import { AgentDetails } from '../Agent/AgentDetails';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = ({route}) => {
  let uri = "CollegeList"
  if( route['params']['LoginData']['type'] == 'agent' ){
    uri = "CollegeAgent"
  }
    return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName = {uri}
      >
        <Stack.Screen name="CollegeList" component={CollegeList} options={{headerShown:false}} />
        <Stack.Screen name="MainCollege" component={MainCollege} options={{headerShown:false}} />
        <Stack.Screen name="EnquiryForm" component={EnquiryForm} options={{headerShown:false}} />
        <Stack.Screen name="CollegeAgent" component={CollegeAgent} options={{headerShown:false}} />
        <Stack.Screen name="AdmissionForm" component={AdmissionForm} options={{headerShown:false}} initialParams={{LoginData:route['params']['LoginData']}}/>
        <Stack.Screen name="AgentSignUp" component={AgentSignUp} options={{headerShown:false}} />
        <Stack.Screen name="ConsultantDetails" component={ConsultantDetails} options={{headerShown:false}} initialParams={{LoginData:route['params']['LoginData']}}/>
        <Stack.Screen name="AgentDetails" component={AgentDetails} options={{headerShown:false}} />
        <Stack.Screen name="AgentAdmissionDetail" component={AgentAdmissionDetail} options={{headerShown:false}}  initialParams={{LoginData:route['params']['LoginData']}} />
    </Stack.Navigator>
    )

}


const BottomTabStack = ({route,navigation}) => {  
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle:{
            backgroundColor:'#fff',
        },
        tabBarLabelStyle:{
          fontWeight:'bold',
          fontSize:16,
        },
        
        tabBarLabel: ({ focused }) => {
            let label;
  
            if (route.name === 'HomeStack') {
              label = focused ? 'Home' : 'Home'; // Customize label for Screen1
            } else if (route.name === 'Enquiry') {
              label = focused ? 'Enquiry' : 'Enquiry'; // Customize label for Screen2
            }else{
                label = focused?'Profile': 'Profile';
            }
  
            return <Text style={{ color: focused ? '#1DA69A' : 'gray' }}>{label}</Text>;
          },
        tabBarIcon: ({ focused, color, size }) => {
            let iconName = "ios-home";
            if(route.name === 'HomeStack') {
                return <Image style={styles.logo} source={require('../../assets/HomeScreen/Nizcarehome.png')} />
            }
            else if (route.name === 'Enquiry') {
                iconName = 'ios-list';
                return <IconFA name={'message-circle'} size={size} color={color} />;
            } else if (route.name === 'Profile') {
                iconName = 'ios-call';
                return <IconEA name={'user'} size={40} color={color} />;
            }

            
        },               

    })} initialRouteName='HomeStack'
        
        >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}} 
          initialParams={{LoginData:route['params']['LoginData']}}         
        />
        <Tab.Screen
          name="Enquiry"
          component={Chat}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Profile" component={MyProfile} options={{headerShown: false}} initialParams={{LoginData:route['params']['LoginData']}}/>
      </Tab.Navigator>
    );
  }

export default BottomTabStack


const styles = StyleSheet.create({
    logo: {
        height:20,
        width:25,
        resizeMode:'cover'       
      },
})