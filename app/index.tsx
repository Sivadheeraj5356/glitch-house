import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Footer from '@/components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Animated } from 'react-native';

import "../global.css"

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    CircularBook: require('../assets/fonts/CircularStd-Book.otf'),
    CircularLight: require('../assets/fonts/CircularStd-Light.otf'),
    Cooper: require('../assets/fonts/CooperHewitt-Medium.otf'),
    NTBrickSans: require('../assets/fonts/NTBrickSans.ttf'),
  });

  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateX, {
            toValue: -300,
            duration: 8000,
            useNativeDriver: true,
          }),
          Animated.timing(translateX, {
            toValue: 0,
            duration: 8000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animate();
  }, [translateX]);

  const [activeTab, setActiveTab] = useState('collections');

  const Collections = () => (
    <View style={styles.tabContent} className='h-[440px] w-[100vw] -ml-[32px] bg-[#1b1e24] -mt-[26px]'>
      <View style={styles.gridContainer} className='ml-8'>
        <View style={styles.gridItem}>
          <Image source={require('@/assets/images/liked.png')} />
          <Image source={require('@/assets/images/rectangle.png')} />
        </View>
        <View style={styles.gridItem}>
          <Image source={require('@/assets/images/saved.png')} />
          <Image source={require('@/assets/images/rectangle.png')} />
        </View>
        <View style={styles.gridItem}>
          <Image source={require('@/assets/images/files.png')} />
          <Image source={require('@/assets/images/rectangle.png')} />
        </View>
      </View>
    </View>
  );

  const ManageTags = () => (
    <View style={styles.tabContent} className='h-[440px] w-[100vw] -ml-[32px] bg-[#3d3f44] -mt-[16px]'>
      <View>
        <Text className='text-white text-xl mx-5'>our recommendations work best when you let us know these things:</Text>
      </View>
      <View className='flex flex-row justify-between w-[90%] h-auto mt-7'>
        <View>
          <Text className='text-white text-xl ml-5 font-Cooper'>YOUR DIFFICULTY ✨</Text>
          <Text className='text-white text-base ml-5'>you decide the level of challenge you want!</Text>
        </View>
        <View>
          <Image source={require('@/assets/images/chevron.png')}></Image>
        </View>
      </View>
      <Text className='h-[1px] my-2 w-[95vw] mt-9 bg-white ml-3'></Text>
      <View className='flex flex-row justify-between w-[90%] h-auto mt-10'>
        <View>
          <Text className='text-white text-xl ml-5'>INTERESTS YOU LIKE ✨</Text>
          <Text className='text-white text-base ml-5'>we'll use these to show you cool builds</Text>
        </View>
        <View>
          <Image source={require('@/assets/images/chevron.png')}></Image>
        </View>
      </View>
      <Text className='h-[1px] my-2 w-[95vw] mt-9 bg-white ml-3'></Text>
      <View className='flex flex-row justify-between w-[90%] h-auto mt-10'>
        <View>
          <Text className='text-white text-xl ml-5'>TOOLS USED ✨</Text>
          <Text className='text-white text-base ml-5'>We’ll suggest better using these picks.</Text>
        </View>
        <View>
          <Image source={require('@/assets/images/chevron.png')}></Image>
        </View>
      </View>
      <Text className='h-[1px] my-2 mt-9 w-[95vw] bg-white ml-3'></Text>
    </View>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={
        <LinearGradient
          colors={['#0b002f', '#23044A']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />
      }
      headerImage={
        <View style={styles.headerContainer}>
          <View style={styles.gradientImageContainer}>
            <Animated.Image
              source={require('@/assets/images/1.png')}
              style={[styles.headerImage, { transform: [{ translateX }] }]}
            />
            {/* <Animated.Image
              source={require('@/assets/images/2.png')}
              style={[styles.headerImage, { transform: [{ translateX:300}] }]}
            /> */}
            <LinearGradient
              colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={StyleSheet.absoluteFillObject}
            />
          </View>
          {/* <View style={styles.gradientImageContainer}>
            
            <Animated.Image
              source={require('@/assets/images/2.png')}
              style={[styles.headerImage, { transform: [{ translateX }] }]}
            />
            <LinearGradient
              colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={StyleSheet.absoluteFillObject}
            />
          </View> */}
          <View style={styles.headerTextContainer}>
            <View style={[styles.flexContainer]}>
              <View>
                <Image source={require('@/assets/images/dog.png')} />
              </View>
              <View style={[styles.centerContainer]}>
                <Image source={require('@/assets/images/Vector.png')} />
                <Image source={require('@/assets/images/Cog.png')} />
              </View>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.row}>
                <Text style={styles.textWhite}>@theo_from_hsr</Text>
                <Image style={styles.badgeImage} source={require('@/assets/images/badge.png')} />
              </View>
              <View style={styles.row}>
                <Text style={styles.editProfileText}>EDIT PROFILE</Text>
                <Image style={styles.editProfileIcon} source={require('@/assets/images/Pen.png')} />
              </View>
            </View>
            <View>
              <View className='flex flex-row justify-start h-auto w-[100%] gap-2 ml-[13px] mt-2'>
                <Image source={require('@/assets/images/IN.png')} className='-mt-44 w-8' />
                <Text className='text-white text-xl -mt-[160px]'>INDIA</Text>
              </View>
              <View className='flex w-[100%] h-auto justify-center items-center mr-[14px] mt-4'>
                <Text className='mx-5 text-white text-xl -mt-60'>18 y/o with high ambitions. want to build cool stuff!</Text>
              </View>
              <View className='-mt-20 ml-6'>
                <View className='flex flex-row justify-start w-[90%] gap-2'>
                  <View>
                    <Image source={require('@/assets/images/user.png')} className='w-6'></Image>
                  </View>
                  <View>
                    <Text className='text-white text-2xl -mt-1 '>2</Text>
                  </View>
                </View>
                <View>
                  <Text className='text-white text-xl'>FOLLOWING</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      }
    >
      <View className='w-[100vw] -ml-[32px] h-[65px] bg-black -mt-[32px]'>
        <View className='flex flex-row justify-between w-[100%] h-auto'>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'collections' && styles.activeTab]}
            onPress={() => setActiveTab('collections')}
          >
            <View className='flex flex-row justify-center items-center gap-2 pt-4 pl-4'>
              {activeTab === 'collections' ? (
                <Image source={require('@/assets/images/collections.png')}></Image>
              ) : (
                <Image source={require('@/assets/images/collections0.png')}></Image>
              )}
              <Text style={[styles.tabButtonText, activeTab === 'collections' && styles.activeTabText]} className='text-2xl '>
                COLLECTIONS
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              {activeTab === 'collections' && <Text className='h-[1px] my-1 bg-[#08b078]'></Text>}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'manageTags' && styles.activeTab]}
            onPress={() => setActiveTab('manageTags')}
          >
            <View className='flex flex-row justify-center items-center gap-2 pt-4 pr-4'>
              {activeTab === 'manageTags' ? (
                <Image source={require('@/assets/images/managetabs1.png')}></Image>
              ) : (
                <Image source={require('@/assets/images/managetabs.png')}></Image>
              )}
              <Text style={[styles.tabButtonText, activeTab === 'manageTags' && styles.activeTabText]} className='text-2xl '>
                MANAGE TAGS
              </Text>
            </View>
            {activeTab === 'manageTags' && <Text className='h-[1px] my-1 bg-[#08b078]'></Text>}
          </TouchableOpacity>
        </View>
      </View>
      <View className='overflow-y-hidden'>{activeTab === 'collections' ? <Collections /> : <ManageTags />}</View>
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <Footer />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  headerImage: {
    width: '180%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    zIndex: 1,
    marginRight: 40,
  },
  gradientImageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#CCCCCC',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    marginBottom: 8,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: 'auto',
    marginBottom: 30,
    marginTop: 14,
  },
  centerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 160,
  },
  textWhite: {
    color: '#FFFFFF',
    fontSize: 20,
    marginRight: 8,
  },
  badgeImage: {
    width: 20,
    height: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editProfileText: {
    color: '#CCCCCC',
    fontSize: 16,
    marginRight: 8,
  },
  editProfileIcon: {
    width: 16,
    height: 16,
  },
  tabButton: {},
  activeTab: {},
  tabButtonText: {
    color: '#CCCCCC',
    fontSize: 16,
  },
  activeTabText: {
    color: '#08b078',
    fontWeight: 'bold',
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  tabText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  gridItem: {
    width: '48%',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101216',
  },
  boldText: {
    fontFamily: 'CircularBold',
    fontSize: 20,
    color: '#FFFFFF',
  },
  mediumText: {
    fontFamily: 'CircularMedium',
    fontSize: 18,
    color: '#CCCCCC',
  },
  regularText: {
    fontFamily: 'CircularRegular',
    fontSize: 16,
    color: '#AAAAAA',
  },
});

