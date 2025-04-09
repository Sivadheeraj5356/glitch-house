import { Image, StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

const Footer = () => {
    const [fontsLoaded] = useFonts({
        CircularBook: require('../assets/fonts/CircularStd-Book.otf'),
        CircularLight: require('../assets/fonts/CircularStd-Light.otf'),
        Cooper : require('../assets/fonts/CooperHewitt-Medium.otf'),
        NTBrickSans: require('../assets/fonts/NTBrickSans.ttf'),
      });
  return (
    <View style={styles.footerContainer} className='w-[100vw] -ml-[32px] -mt-[40px] relative'>
        {/* <Text className='h-[1px] w-[100%] my-1 -mt-10 bg-white'></Text> */}
      <Image
        source={require('@/assets/images/footerimg.png')}
        style={styles.backgroundImage}
      />

      <Image
        source={require('@/assets/images/glitch.png')}
        style={styles.glitchImage}
        className='absolute top-[-50px] left-[-50px] w-[200px] h-[200px]'
      />

      <Text style={styles.joinedText} className='font-CircularRegular'>JOINED 2242 DAYS AGO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'relative', // Allows positioning of child elements
    backgroundColor: 'black', // Set background color to black
    height: 150, // Set height of the footer
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    overflow: 'hidden', // Prevent overflow
    margin: 0, // Remove any margins
    padding: 0, // Remove any padding
    marginVertical: -32,
    alignSelf: 'stretch',
  },
  backgroundImage: {
    width: '100%', // Full width of the container
    height: '100%', // Full height of the container
    resizeMode: 'cover', // Ensures the image covers the entire container
    position: 'absolute', // Makes it the background
    zIndex: 1, // Ensures it stays behind other elements
    top: 0, // Align to the top of the container
  },
  glitchImage: {
    position: 'absolute', // Position it on top of the background
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: [{ translateX: -50 }, { translateY: -50 }], // Adjust for centering
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    resizeMode: 'contain', // Maintain aspect ratio
    zIndex: 2, // Ensure it stays above the background
  },
  joinedText: {
    position: 'absolute', // Position it relative to the footer
    bottom: 10, // Place it at the bottom of the footer
    color: 'white', // Set text color to white
    fontSize: 16, // Adjust font size
    zIndex: 3, // Ensure it stays above the background
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
    fontFamily: 'CircularMedium', // Use the loaded font
    fontSize: 18,
    color: '#CCCCCC',
  },
  regularText: {
    fontFamily: 'CircularRegular', // Use the loaded font
    fontSize: 16,
    color: '#AAAAAA',
  },
});

export default Footer;