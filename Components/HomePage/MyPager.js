import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated,Image } from 'react-native';
import PagerView from 'react-native-pager-view';

const MyPagerView = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const handlePageScroll = (event) => {
    const { position } = event.nativeEvent;
    Animated.spring(scrollX, {
      toValue: position,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <PagerView style={styles.viewPager} onPageScroll={handlePageScroll}>
        <View key="1" style={styles.page}>
            <View style={{flexDirection:'row',width:'100%'}}>
                <View style={{width:'50%',justifyContent:'flex-end',top:20}}>
                    <Image source={require('../../assets/HomeScreen/download_1.png')} style={{resizeMode:'contain',height:150,width:200,}}/>

                </View>
                <View style={{width:'50%',alignSelf:'center'}}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>Online Admission 2022-2023</Text>
                </View>
            </View>          
        </View>
        <View key="2" style={styles.page}>
            <View style={{flexDirection:'row',width:'100%'}}>
                <View style={{width:'50%',justifyContent:'flex-end',top:20}}>
                    <Image source={require('../../assets/HomeScreen/download_1.png')} style={{resizeMode:'contain',height:150,width:200,}}/>

                </View>
                <View style={{width:'50%',alignSelf:'center'}}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>Online Admission 2023-2024</Text>
                </View>
            </View>
        </View>
        <View key="3" style={styles.page}>
            <View style={{flexDirection:'row',width:'100%'}}>
                <View style={{width:'50%',justifyContent:'flex-end',top:20}}>
                    <Image source={require('../../assets/HomeScreen/download_1.png')} style={{resizeMode:'contain',height:150,width:200,}}/>

                </View>
                <View style={{width:'50%',alignSelf:'center'}}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>Online Admission 2024-2025</Text>
                </View>
            </View>
        </View>
      </PagerView>
      <View style={styles.paginationContainer}>
        <Animated.View
          style={[
            styles.paginationIndicator,
            {
              transform: [
                {
                  translateX: scrollX.interpolate({
                    inputRange: [0, 1, 2],
                    outputRange: [0, 50, 100], // Adjust according to your pagination style
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPager: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  paginationIndicator: {
    width: 10,
    height: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  logo: {
    height:150,
    width:180,    
  },
});

export default MyPagerView;
