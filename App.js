
import { StyleSheet,} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

import HomepageLoginScreen from './Components/HomeScreen/LoginScreen';
import { OTPScreen } from './Components/HomeScreen/OtpScreen';
import { AdmissionSignup } from './Components/SignUpScreens/SignUp';
import BottomTabStack from './Components/HomePage/BottomTab';
import { NavigationContainer } from '@react-navigation/native';



const LoginNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={HomepageLoginScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="AdmissionSignup" component={AdmissionSignup} />
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />      
    </Stack.Navigator>
  );
};

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(data);
  }

  useEffect(() => {
    getData();
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 900);
  }, [isLoggedIn]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNav /> : <LoginNav />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
