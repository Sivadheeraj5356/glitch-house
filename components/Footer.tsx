import { Image, StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

const Footer = () => {
  const [fontsLoaded] = useFonts({
    CircularBook: require('../assets/fonts/CircularStd-Book.otf'),
    CircularLight: require('../assets/fonts/CircularStd-Light.otf'),
    Cooper: require('../assets/fonts/CooperHewitt-Medium.otf'),
    NTBrickSans: require('../assets/fonts/NTBrickSans.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.footerContainer} className='w-[100vw]'>
      <View>
      <Image
        source={require('@/assets/images/footerimg.png')}
        style={styles.backgroundImage}
       
      />
      </View>

      <Image
        source={require('@/assets/images/glitch.png')}
        style={styles.glitchImage}
        className='-ml-[20px] right-5'
      />

      <Text style={styles.joinedText}>JOINED 2242 DAYS AGO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'relative',
    backgroundColor: 'black',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    marginVertical: -32,
    marginLeft: -32,
    alignSelf: 'stretch',
  },
  backgroundImage: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', 
    resizeMode: 'cover',
    zIndex: 1,
  },
  glitchImage: {
    position: 'absolute',
    top: '50%',
    right: 20,
    transform: [{ translateX: -100 }, { translateY: -60 }],
    width: 160,
    height: 160,
    resizeMode: 'contain',
    zIndex: 2, 
  },
  joinedText: {
    position: 'absolute',
    bottom: 10,
    color: 'white',
    fontSize: 13,
    zIndex: 3, 
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

export default Footer;